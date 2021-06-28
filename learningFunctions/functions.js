const calculation = (num1, num2) =>{
    const sum  = num1 + num2;
    const difference =  num1 - num2;
    const multiplication = num1*num2;
    const division = num1/num2;
    const resultObj = {
        sum: sum,
        difference:difference,
        multiplication:multiplication,
        division:division
    }
    return resultObj;
}


alphabet_order = str =>
  {
return str.split('').sort().join('');
  }


function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}

const reversalNum = num =>
{
    num = num + "";
    return num.split("").reverse().join("");
}

const reverseNum = num =>{
       var rev_num = 0;
    if (num > 0)
    {
        rev_num = rev_num*10 + num%10;
        num = num/10;
        return rev_num;
    }
return rev_num
}



const substractNum = (num1,num2) =>
{
    const sub = num1 - num2;
  const resultObj = {
      sub:sub
  }
  return resultObj;
}

module.exports = {
    calculation ,
    reverseNum,
    substractNum,
    alphabet_order,
    reverse_a_number,
    reversalNum
}

