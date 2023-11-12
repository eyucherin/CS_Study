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
