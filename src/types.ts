export type ArrayTwoOrMore<T> = [T, T] & T[];

/**
 * This type guard assures that the given value is indeed of type ArrayTwoOrMore.
 * See https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-type-assertions
 *
 * @param value
 */
export function isArrayTwoOrMore<T>(value: T[]): value is ArrayTwoOrMore<T> {
  return value?.length > 1;
}
