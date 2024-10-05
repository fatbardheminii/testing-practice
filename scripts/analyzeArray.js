export const analyzeArray = (arr) => {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    !arr.every((num) => typeof num === "number")
  ) {
    return null;
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average: parseFloat(average.toFixed(2)),
    min,
    max,
    length,
  };
};
