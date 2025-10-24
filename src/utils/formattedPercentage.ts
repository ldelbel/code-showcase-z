export const formattedPercentage = (percentage: number) =>
  Number.isInteger(percentage) ? percentage : Number(percentage.toFixed(1));
