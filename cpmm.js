
var computationnGas = 172298965696  //142158097930
var referenceGas = 109


function yToX (yDelta){
    const constat = computationnGas * referenceGas


    const numerator = yDelta * computationnGas;
    const denominator = referenceGas + yDelta;

    const xDelta = numerator / denominator;

    computationnGas -= xDelta;
    referenceGas += yDelta;

    console.log(constat, "constant")
    console.log(xDelta, "xDelta")
    console.log(yDelta, "yDelta")

    console.log(computationnGas, "computationGas")
    console.log(referenceGas, "referenceGas")
}

console.log(yToX(-4));