const gasFees = [
    71.301068984,
    80.121868782,
    110.463163935,
    121.514003661,
    118.014700189,
    172.298965696,
    // 238.472417839, //과거
    // 142.158097930
]

let sum = gasFees.reduce((i, j) => i + j, 0)

console.log(sum / gasFees.length)