//해시 - 완주하지 못한 선수
//input = completion[string], participants[string]
//output = 완주하지 못한 1명의 participant (string)

function solution(participant, completion) {
  let seen = {};

  for (let i of participant) {
    seen[i] = (seen[i] ?? 0) + 1;
  }

  for (let i of completion) {
    seen[i] -= 1;
    if (seen[i] == 0) {
      delete seen[i];
    }
  }

  return Object.keys(seen)[0];
}

//해시- 폰켓몬
//input = [3,1,2,3] 실험실에 있는 포케몬
//output = n/2 가져갈 수 있는데, 퇴대한 다양하게 가져오고싶은 수.

function solution(nums) {
  let seen = new Set(nums);
  if (seen.size >= nums.length / 2) return nums.length / 2;
  return seen.size;
}

function solution2(nums) {
  let dic = {};
  for (let i of nums) {
    dic[i] = (dic[i] ?? 0) + 1;
  }
  if (Object.keys.length >= nums.length / 2) {
    return nums.length / 2;
  }
  return Object.keys.length;
}

function solution3(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}


//해시- 전화번호 목록
//input = [] --> 전화번호부에 적힌 전화번호
//output = 접두어인 경우가 있는지 확인하는 불리언 값

function solution(phone_book){
    phone_book.sort()

    for(let i = 0 ; i < phone_book.length - 1; i++){
        if(phone_book[i+1].startsWith(phone_book[i])){
            return false 
        }
    }

    return true
}

//해시 --의상 
//input = 2d array clothes 
//output =

function solution(clothes) {
    let seen = {}
    let count = 1 
    
    for(let i of clothes){
        for(let j = 0; j < i.length -1 ; j++){
            const lastVal = i[i.length-1]
            seen[lastVal] = (seen[lastVal] ?? 0) + 1
        }
    }
    
    for(let i of Object.values(seen)){
        count *=(i+1)
    }
    
    return count-1

}

//스택과 큐 -- 같은 숫자는 싫어
//input
//output

function solution(arr)
{
    var answer = [];
    
    for (let i of arr){
        if(answer.length && answer[answer.length-1] == i){
            continue
        }
        answer.push(i)
    }
    
    return answer;
}