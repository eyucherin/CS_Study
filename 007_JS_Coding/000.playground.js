console.log([1,2,3,4,5,6,7,8].reduce((a,b)=>a+b,2))

Array.prototype.reduce1 = function(fn,start){
    let res = start
    for(let i = 0; i < this.length;i++){
        res += fn(this[i])
    }
    return res
}

[1,2,3,4,5,6,7].reduce1((val)=>val,0)

//다시


