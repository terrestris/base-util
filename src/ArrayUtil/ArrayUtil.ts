/**
 * Works like the standard .join, except it returns a new array with the value inserted between all values of the array
 * instead of a string.
 *
 * @param list any array
 * @param value any value
 * @returns the new array
 */
export const joinArrayWith = (list: any[], value: any) => {
  const newList: any[] = [];
  list.forEach((item, idx) => {
    if (idx === 0) {
      newList.push(item);
    } else {
      newList.push(value);
      newList.push(item);
    }
  });
  return newList;
};
