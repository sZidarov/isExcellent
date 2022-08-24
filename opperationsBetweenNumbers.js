function opperationBetweenNumbers (input) {
    let num1 = Number (input[0]);
    let num2 = Number (input[1]);
    let opperator = String (input[2]);
    let result =0;
    let resultType=0;

    switch(opperator){
        case "+":
        case "-":
        case "*":
            if (opperator==="+"){
                result=num1+num2;
            }else if (opperator==="-"){
                result=num1-num2;
            }else if (opperator==="*"){
                result=num1*num2;
            }
            if(result%2===0){
                resultType="even";
            }else{
                resultType="odd";
            }
            console.log(`${num1} ${opperator} ${num2} = ${result} - ${resultType}`);
            break;
        case "/":
            result=(num1/num2).toFixed(2);
            if (num2===0){
                console.log(`Cannot divide ${num1} by zero`);
            }else {
                console.log(`${num1} / ${num2} = ${result}`);
            }
            break;
        case "%":
            result=num1%num2;
            if (num2===0){
                console.log(`Cannot divide ${num1} by zero`);
            }else {
                console.log(`${num1} % ${num2} = ${result}`);
            }
            break;
    }
}
opperationBetweenNumbers (["10",
"0",
"%"])






