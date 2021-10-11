export const roundNum = (value: number): number => {
  return Math.round((value + Number.EPSILON) * 100) / 100;
};
