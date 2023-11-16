//2. Add Two Numbers
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    let carry = 0

    while(l1 || l2 || carry){
        let val1 = l1?l1.val:0;
        let val2 = l2?l2.val:0;
        let total = val1 + val2 + carry 
        carry = Math.floor(total / 10)
        total = total % 10
        current.next = new ListNode(total)
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
        current = current.next
    }

    return dummy.next
};

//004 Length of Longest Substring 
//input = s
//output = 중복되지 않는 substring의 최대 길이

const longestSubstring = (s) => {
    let seen = new Set();
    let first = 0;
    let res = 0;

    for (let second = 0; second < s.length ; second++){
        let secondVal = s[second];
        while(seen.has(secondVal)){
            let firstVal = s[first];
            seen.remove(firstVal);
            first ++;
        }
        seen.add(secondVal);
        res = Math.max(res,second - first + 1);
    }
    return res;
}

//5. Longest Palindromic Substring
//input = string(s)
//output = string(s) --> s의 substring중, 길이가 제일 큰 palindrome을 찾기.

const longestPalindrome = (s) =>{
    const findPalindrome = (first,second) =>{
        while(first >= 0 && second < s.length && s[first] == s[second]){
            first --;
            second ++;
        }
        return s.slice(first+1,second);
    }

    let res = ""

    for(let i = 0; i < s.length;i++){
        let one = findPalindrome(i,i);
        let two = findPalindrome(i,i+1);

        if (res.length < one.length) res = one;
        if (res.length < two.length) res = two;
    }

    return res;
}

//238. Product of Array Except Self
//input = int array 하나 (nums)
//output = num[i]를 제외한 모든 숫자의 곱셈.

let productExceptSelf = (nums) =>{
    let prefix = [1];
    let postfix = [1];

    for (let i = 0; i < nums.length - 1; i++){
        let lastIndx = nums.length -1 

        prefix.push(nums[i] * prefix[prefix.length - 1])
        postfix.push(nums[lastIndx]* postfix[postfix.length - 1])
    }

    postfix = postfix.reverse()

    for(let i = 0; i < postfix.length ; i++){
        prefix[i] = prefix[i] * postfix[i]
    }

    return prefix
}


//98 Validate Binary Search Tree
//input = head 
//output = 주어진 트리가 BST가 맞는지 확인하는 불리언값. 

const isValidBST = (root) =>{

    const search = (node,left,right) =>{
        if(!node) return true;
        if(!(left < node.val) || !(node.val < right)){
            return false;
        }
        return search(node.left,left,node.val) && search(node.right,node.val,right)
    }

    return search(root,-Infinity,Infinity)
}

//102 Binary Tree Level order traversal
//input = root 
//output = 이진 리스트로 구현된 level order traversal

const levelOrder =(root) =>{
    if(!root) return[]

    let res = []
    let q = [root]

    while(q.length){
        let subRes = []
        let size = q.length

        for(let i = 0 ; i < size ; i++){
            const current = q.shift()
            subRes.push(current.val)

            if(current.left) subRes.push(current.left)
            if(current.right) subRes.push(current.right)
        }
        
        res.push(subRes)
    }

    return res;
}

//103 Binary Tree ZigZag Level Traversal
//input = root
//output = Level order traversal하면서 다음래밸의 값들을 뒤집어놓기

const zigZagLevel = (root) =>{
    if(!root) return[]

    let res = []
    let q = [root]
    let zigZag = false

    while(q.length){
        let subRes = []
        const size = q.length

        for(let i = 0; i<size; i++){
            const current = q.shift()
            subRes.push(current.val)
            if(current.left) q.push(current.left)
            if(current.right) q.push(current.right)
        }

        if(!zigZag) res.push(subRes)
        else res.push(subRes.reverse())
        zigZag = !zigZag
    }

    return res
}

//