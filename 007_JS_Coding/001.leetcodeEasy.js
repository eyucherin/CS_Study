//1.TwoSum

const twoSum = (nums,target) =>{
    let dic = {}
    for(let i = 0; i < nums.length ; i ++){
        let value = nums[i];
        let find = target - value; 
        if(find in dic) return [i,dic[find]];
        dic[value] = i;
    }
}

//501.Find Mode in Binary Search Tree

//input = root
//output = 트리에서 제일 많이 나타나는 숫자. 여러개 가능 --> 리스트 형태.

const findMode = (root) => {
    let seen = {}
    let q = [root]

    while(q.length){
        let current = q.shift()

        if (current.left){
            q.push(current.left)
        }
        if(current.right){
            q.push(current.right)
        }

        seen[current.val] = (seen[current.val]??0) + 1
    }

    const maxVal = Math.max(...Object.values(seen))
    let res = []

    for(let i in seen){
        if (seen[i] == maxVal){
            res.push(i)
        }
    }

    return res
}

//100 Same Tree 
//input = q,p 트리 두개의 루트
//output = q,p 가 같은 트리인지 확인하는 불리언 값.

let isSameTree = (p,q) =>{
    let search = (one,two) =>{
        if(!one && !two){
            return true
        }
        else if ((!one && two) || (one && !two) || (one.val != two.val)){
            return false
        }
        return search(one.left,two.left) && search(one.right,two.right)
    }

    return search(p,q)
}

//104. Maximum Depth of Binary Tree
//input = root
//output = 제일 깊은 길의 값

const maxDepth = (node) =>{
    if(!node) return 0
    let lT = maxDepth(node.left)
    let rT = maxDepth(node.right)
    return Math.max(lT,rT) + 1 
}


//110 Balanced Binary Tree[다시]
//input = root 
//output = 불리언 값

const isBalanced = (root) =>{
    const search = (node) =>{
        if(!node) return 0 
        let lT = search(node.left)
        let rT = search(node.right)

        if(lT == -1 || rT == -1 || Math.abs(lT - rT) > 1) return -1 

        return Math.max(lT,rT) + 1
    }
    return search(root) != -1
}

//112 Path Sum 
//input: root노드,targetSum
//output: root노드에서 부터 마지막노드까지, targetSum까지 더해지는 격로가 있는지 확인하는 불리언값

const pathSum = (root,targetSum) =>{
    const search = (node,cS) =>{
        if(!node) return false
        if(!node.left && !node.right && node.val + cS == targetSum) return true
        return search(node.left,cS + node.val) || search(node.right,cS + node.val)
    }

    return search(root,0);
}