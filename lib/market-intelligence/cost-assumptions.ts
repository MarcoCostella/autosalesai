export type ConditionGrade = 1 | 2 | 3 | 4 | 5;
// Illustrative preparation budgets, not an auction house grading tariff or inspection result.
export const preparationBudgets = [
  {grade:1 as ConditionGrade, label:"Light preparation", allowance:125},
  {grade:2 as ConditionGrade, label:"Minor remedial work", allowance:300},
  {grade:3 as ConditionGrade, label:"Moderate preparation", allowance:450},
  {grade:4 as ConditionGrade, label:"Significant preparation", allowance:550},
  {grade:5 as ConditionGrade, label:"Extensive preparation", allowance:700},
];
export const preparationForGrade=(grade:ConditionGrade)=>preparationBudgets[grade-1];
export const preparationTotal=(grade:ConditionGrade)=>{return preparationForGrade(grade).allowance;};
export const sampleBuyerFee=550;
export const sampleTransport=100;
