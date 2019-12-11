export const getInitials = (str: string) => {
  const middle = str.length / 2;
  const firstLetter = str.slice(0, middle)[0].toUpperCase();
  const secondLetter = str.slice(middle, str.length)[0].toUpperCase();
  return { firstLetter, secondLetter };
};
