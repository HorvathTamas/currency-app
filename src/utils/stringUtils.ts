export const removeWhiteSpaces = (text: string): string => {
  return text.replace(/\s/g, '');
};

export const getFlagId = (currency: string): string => {
  const textTrimmed = removeWhiteSpaces(currency);
  return textTrimmed.substring(0, 2).toLowerCase();
};
