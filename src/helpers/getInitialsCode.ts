export const getInitialsCode = (username: string) => {
  return username.split('')
    .map((char) => char.charCodeAt(0) * 21 + 37)
    .reduce((acc, next) => +acc + next);
};
