//77. Combinations

function combination(n,k){
    let res = []
    let current = []

    function search(indx){
        if(current.length == k){
            res.push([...current])
            return
        }

        for(let i = indx; i < n+1;i++){
            current.push(i)
            search(i+1)
            current.pop()
        }
    }
    search(1)
    return res;
}

//39 Combination Sum 

function combinationSum1(candidates,target){
    let current = []
    let res = []

    function search(indx){
        let tS = current.reduce((a,b) => a+b,0)
        if(tS > target){
            return
        }
        else if (tS == target){
            res.push([...current])
            return
        }

        for(let i = indx; i<candidates.length;i++){
            current.push(candidates[i])
            search(i)
            current.pop()
        }
    }
    search(0)
    return res
}

function combinationSum2(candidates,target){
    let current = []
    let res = []

    function search(indx,tS){
        if(tS > target){
            return
        }
        else if (tS == target){
            res.push([...current])
            return
        }

        for(let i = indx; i<candidates.length;i++){
            current.push(candidates[i])
            search(i,tS+candidates[i])
            current.pop()
        }
    }
    search(0,0)
    return res
}

function combinationSum3(candidates,target){
    let res = []

    function search(indx,tS,current){
        if(tS > target){
            return
        }
        else if (tS == target){
            res.push([...current])
            return
        }

        for(let i = indx; i<candidates.length;i++){
            current.push(candidates[i])
            search(i,tS+candidates[i],current)
            current.pop()
        }
    }
    search(0,0)
    return res
}

//combinationSum2
function combinationSum2(candidates,target){
    candidates.sort((a,b)=>a-b)
    let current = []
    let res = []

    function search(indx,cS){
        if(cS > target)return
        else if (cS == target){
            res.push([...current])
            return
        }
        for(let i = indx; i < candidates.length; i++){
            if(i < indx && candidates[i] == candidates[i-1]){
                continue
            }
            current.push(candidates[i])
            search(i+1,cS + candidates[i])
            current.pop()
        }
    }
    search(0,0)
    return res
}

//Permutation 

function Permutation(arr){
    let res = []
    let current = []

    function search(vals){
        if(vals.length == 0){
            res.push([...current])
            return 
        }
        for(let i = 0; i < vals.length;i++){
            current.push(vals[i])
            search([...vals.slice(0,i),...vals.slice(i+1)])
            current.pop()
        }
    }
    search(arr)
    return res
}