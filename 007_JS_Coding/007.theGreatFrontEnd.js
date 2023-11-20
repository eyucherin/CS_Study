//clamp 
export default function clamp(value, lower, upper) {
    if(value < lower) return lower
    else if(value > upper) return upper
    return value
  }

//chunk 
export default function chunk(array, size = 1) {
    let res = []
    let sub = []
  
    for(let i of array){
      sub.push(i)
      if(sub.length === size){
        res.push(sub)
        sub = []
      }
    }
    if(!sub.length == 0){
      res.push(sub)
    }
    return res
  }

//compact 
export default function compact(array) {
    let res = []
    for(let i of array){
      if(i){
        res.push(i)
      }
    }
    return res
  }