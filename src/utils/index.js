export const capitalize = stringItem => `${stringItem[0].toUpperCase()}${stringItem.slice(1)}`;

export const sum = arrayOfNumbers => arrayOfNumbers.reduce((prev, curr) => (prev + curr), 0)
