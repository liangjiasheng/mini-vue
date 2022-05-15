export const extend = Object.assign;

export const isObject = (value: string) => {
  return value !== null && typeof value === 'object';
};

export const hasChanged = (val, newValue) => {
  return !Object.is(val, newValue);
};

export const hasOwn = (val, key) => {
  return Object.prototype.hasOwnProperty.call(val, key);
};
