const reverseNumber = (Number) => {
    const num = [...Number.toString()].reverse().join('');
    console.log(num);
  }
  
  reverseNumber();