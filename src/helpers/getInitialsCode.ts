export const getInitialsCode = (first: string, second: string) => {
  return first.charCodeAt(0) * 23 + second.charCodeAt(0) * 11;
};
