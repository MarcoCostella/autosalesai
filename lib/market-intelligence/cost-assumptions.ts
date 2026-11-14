export type ConditionGrade = 1 | 2 | 3 | 4 | 5;
// Illustrative preparation budgets, not an auction house grading tariff or inspection result.
export const preparationBudgets = [
  {grade:1 as ConditionGrade, label:"Light preparation", mechanical:150, cosmetic:50, valet:50},
  {grade:2 as ConditionGrade, label:"Minor remedial work", mechanical:200, cosmetic:200, valet:100},
  {grade:3 as ConditionGrade, label:"Moderate preparation", mechanical:300, cosmetic:400, valet:150},
  {grade:4 as ConditionGrade, label:"Significant preparation", mechanical:450, cosmetic:750, valet:200},
  {grade:5 as ConditionGrade, label:"Extensive preparation", mechanical:650, cosmetic:1250, valet:300},
];
export const preparationForGrade=(grade:ConditionGrade)=>preparationBudgets[grade-1];
export const preparationTotal=(grade:ConditionGrade)=>{const p=preparationForGrade(grade);return p.mechanical+p.cosmetic+p.valet;};
export const sampleBuyerFee=550;
export const sampleTransport=100;
