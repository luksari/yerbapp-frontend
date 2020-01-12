export const prepareFile = (file: File) => {
  const fd = new FormData();
  fd.append('file', file);
  return fd;
};
