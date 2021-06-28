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
const reverseNum = num =>{
    var rev_sum = 0;
    if (num > 0)
    {
        rev_sum = rev_sum*10 + num%10;
        num = num/10;
        return rev_sum;
    }
}




module.exports = {
    calculation ,
    reverseNum
}

