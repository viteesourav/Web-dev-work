//Adding utility Functions...
const generateRandomNum = () => {
    return Math.floor(Math.random() * 6) + 1; 
}
const rollDice = (numOfDice) => {
    return Array.from({length: numOfDice}, ()=>generateRandomNum());
}

const sumDice = (diceList) =>{
    return diceList.reduce((acc,curr)=>(curr+acc), 0);
}


//Game win Logic:
const getSum = (diceList, target) => {
    return sumDice(diceList) === target;
  }
  
  const allLessDice = (diceList, target) => {
    return diceList.every(val => (val <= target));
  }
  
  const allSameDie = (diceList) => {
    return diceList.every(curr => (curr === diceList[0]));
  }
  

export {generateRandomNum, rollDice, sumDice, getSum, allLessDice, allSameDie};

//...........................................................................