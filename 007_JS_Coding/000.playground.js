//implementation forEach

Array.prototype.forEach1 = function(fn){
    for(let i = 0; i < this.length; i++){
        fn(this[i])
    }
}

let a = [1,2,3,4,5,6,7]
let b = function(a){
    console.log(a + 100)
}

a.forEach1(b)

function forEach2(arr,fn){
    for(let i of arr){
        fn(i)
    }
}

forEach2([1,2,3,4,5],(val)=>console.log(100+val))


//implement map 
Array.prototype.map1 = function(fn){
    let res = []
    for(let i = 0; i < this.length; i++){
        res.push(fn(this[i]));
    }
    return res
}

console.log([1,2,3,4,5,6,7].map1((val)=>val+100))

function map2(arr,fn){
    let res = []
    for(let i of arr){
        res.push(fn(i))
    }
    return res
}

console.log(map2([1,2,3,4,5,6],(val)=>100+val))


//implement filter
Array.prototype.filter1 = function(fn){
    let res = []
    for(let i = 0; i < this.length;i++){
        console.log(this[i])
        if(fn(this[i])){
            res.push(this[i])
        }
    }
    return res
}

[1,2,3,4,5,6,7].filter1((val)=>val%2 === 0)