export const getImagePath = (name: string) => `/images/${name}`;
export const arrayRandom = <T extends any>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];
