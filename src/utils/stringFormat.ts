function descomponerStringArray(str: string) {
  if (str) {
    return str
      .split("\n")
      .filter(elem => !!elem)
      .map(item => {
        return { text: item };
      });
  }
  return [];
}

export { descomponerStringArray };
