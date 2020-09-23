function check(){
    const number = document.getElementById("fibonacci_number").value;

    let fibonacciArray = []
    for(let i=0; i<parseInt(number)+2; i++){
        if (fibonacciArray.length === 0){
            //console.log('array bos')
            fibonacciArray[i]=0;
            //console.log("fibanacci aray 0  "+ fibonacciArray )
        }else if(fibonacciArray.length === 1){
            fibonacciArray[i]=1;
            //console.log("fibanacci aray 1  "+ fibonacciArray )
        }else{
            fibonacciArray[i] = fibonacciArray[i-1]+fibonacciArray[i-2];
            //console.log("fibanacci aray  "+ fibonacciArray )
        }
    }
    console.log(fibonacciArray[fibonacciArray.length-1])
    document.getElementById('result').innerHTML = fibonacciArray[fibonacciArray.length-1];
}
