//1.ForEach 
console.log("ForEach")
let numbers = [1,2,3,4,5,6];
numbers.forEach((val,indx)=>{
    console.log(`val${val} index${indx}`)
})

//2.Split
console.log("\nSplit")
let a = "Hello World my name is Che Rin";
a = a.split(" ")
console.log(a)

//3.Join
console.log("\nJoin")
a = a.join(" ");
console.log(a);

//4.sort
console.log("\nsort")
let numbers2 = [4,1,2,3,4,5,6];
//sorting
numbers2.sort()
console.log(numbers2)
//sorting in reverse order
numbers2.sort().reverse()
console.log(numbers2)

//5.Filter
console.log("\nFilter")
let numbers3 = [1,2,3,4,5,6,7,8]
let num3Res = numbers3.filter((a) => a % 2 === 0)
console.log(num3Res);

//6.Map
console.log("\nMap")
let num3Res2 = numbers3.map((a) => a *2)
console.log(num3Res2)

//7.Reduce
console.log("\nReduce")
let num3Res3 = numbers3.reduce((total,e)=>total+e,0)
console.log(num3Res3)

//8.DFS()
console.log("\nDFS")
const graph = {
    1:[2,3],
    2:[4],
    3:[4,5],
    4:[],
    5:[]
}

const dfs = (node,visited = new Set()) =>{
    if(node in visited){
        return
    }
    visited.add(node)
    console.log(node)
    graph[node].forEach((val)=>{
        dfs(val)
    })
}

dfs(1)

//9.Binary Search
console.log("\nBinary Search ")
const binSearch = (arr,findVal) =>{
    let first = 0
    let last = arr.length - 1;
    while(first <= last){
        let mid = Math.floor((first + last) / 2)
        if (arr[mid] == findVal) return mid 
        else if (arr[mid] < findVal) first = mid + 1 
        else last = mid -1
    }
    return -1
}
console.log(binSearch(numbers3,1))

//10.2D Array
console.log("\n2D array")
let gen2D = Array(10).fill().map((e)=>Array(2).fill(1));
console.log(gen2D)

//11. Fibonacci
// 0 1 2 3 4 5 6 7 8
// 0 1 1 2 3 5 8 13 21
console.log("\nFibonacci")
//Top Bottom Approach(recursion)
const fib1 = (n) => {
    if(n == 0 || n == 1){
        return n
    }
    return fib1(n-1) + fib1(n-2)
}
console.log(fib1(8))

//Top Bottom Approach(memoization)
const fib2 = (n) =>{
    memo = {0:0,1:1}

    const search = (val) =>{
        if(val in memo){
            return memo[val]
        }
        memo[val] = search(val-1) + search(val-2)
        return memo[val]
    }

    search(n)
    return memo[n]
}

console.log(fib2(8))

//Bottom Up Approach(DP)
const fib3 = (n) =>{
    if(n == 0 || n == 1){
        return n;
    }
    let dp = [0,1]
    for (let i = 2; i <= n; i++){
        dp.push(dp[dp.length - 1] + dp[dp.length - 2])
    }
    return dp[dp.length - 1]
}
console.log(fib3(8));
