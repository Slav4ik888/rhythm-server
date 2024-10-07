import { isUndefined } from '../../../../libs/validators';

/** v.23-07-23 */
export const showIfNotUndefined = (
  field    : string | undefined,
  wrapper? : string, // Обёртка. Для места куда вставить field обозначьте ###
): string => {
  let str = '';

  if (isUndefined(field)) return str

  if (! wrapper) return field as string
  
  const posField = wrapper.indexOf('###');
  if (posField === -1) return field as string

  const wrapStart = wrapper.slice(0, posField);
  if (wrapStart) str += wrapStart

  str += field;

  const wrapEnd = wrapper.slice(posField + 3);
  if (wrapEnd) str += wrapEnd

  return str
}
