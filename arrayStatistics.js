exports.arrayStats = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const arrayStatsObject = {
    sum: sum,
    average: avg,
    min: min,
    max: max,
  };

  return arrayStatsObject;
};
