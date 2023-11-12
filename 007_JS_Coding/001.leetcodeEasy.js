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