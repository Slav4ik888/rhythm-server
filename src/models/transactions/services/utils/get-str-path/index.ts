

/**
 * ['first', 'second', 'third'] => 'first.second.third'
 */
export const getStrPath = (path : string[]): string => {
  if (! path || ! path.length) return ''
  
  return path.join('.')
};
