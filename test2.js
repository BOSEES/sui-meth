
// const executedGasUnit = 2271165884;  //computation cost * reference gas price 0.00000027798
// 130312312727
const computationCost = 15312312727; //알수없다. 예상해야함 // 이전 컴퓨테이션 * 레퍼런ㅅ스가스  / 예상 레퍼런스
const referenceGasPrice = 600; //예상은 할수 있다. 하지만 계산해야함

const executedGasUnit = computationCost / referenceGasPrice;  //문제없음
const validatorMultiple = 0.194142498243555 / 100; //보상 지분을 정확히 알아야함.
const suiTokenPrice = 442 //문제없고
const gasPriceQuote = 650 //우리가 제출한 레퍼런스 가스프라이스
const gasPricePerUnitCost = 0.000001250 //문제없고 

const cost = executedGasUnit * gasPricePerUnitCost * 1.02
const reward = validatorMultiple * suiTokenPrice * gasPriceQuote * executedGasUnit

console.log(reward)
console.log(cost)
console.log((reward / (10**9)) - cost)
// 265.80565904231796
