//The validator commission.
const validatorCommission = 0.15

//The share of total stake managed by each validator, with validators with higher shares obtaining relatively more stake rewards
const networkStakingPercentage = 0.1 //9 : 1 network deposit percentge

//The % of stake owned by the validator itself as opposed to by third-party delegators
const validatorStatkingPercentage = 0.8 //8 validator : 2 delegator

// The storage fund share. When the storage fund is large, each validator keeps more stake rewards and gives less to its delegators than when the storage fund is small.
const alpha = 0.9
const storageFund = 1 - alpha // 0.1

// The Tallying Rule score for each validator, with validators with scores of 1 obtaining relatively more stake rewards than validators with scores of 0.
const tallyPoint = 1

// N = Total validator count
const totalValidatorCount = 42

// statke reward = subsi + refrence gas fee
const stakingRewards = 10000

//"Recapitalizing the storage fund" means that part of the stake rewards accrued to the storage fund get reinvested back into the fund (gamma %) and the remainder goes to validators as stake rewards (1-gamma)%. This is a hardcoded parameter and equals gamma = 95%.
const gamma = 0.95 

const validatorRewards = (alpha * (validatorStatkingPercentage + validatorCommission * (1 - validatorStatkingPercentage)) * tallyPoint * networkStakingPercentage + (1 - alpha) * gamma / totalValidatorCount) * stakingRewards;
const delegateRewards = (alpha * (1 - validatorCommission) * (1 - validatorStatkingPercentage)) * tallyPoint * networkStakingPercentage * stakingRewards;
const totalRewards = (alpha * tallyPoint * networkStakingPercentage + (1 - alpha) * gamma / totalValidatorCount) * stakingRewards;

console.log(validatorRewards);
console.log(delegateRewards);
console.log(totalRewards, "=", validatorRewards + delegateRewards);