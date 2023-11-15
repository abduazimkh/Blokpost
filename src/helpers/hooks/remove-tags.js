function removeTags(text) {
  const regex = /(<([^>]+)>)/ig;
  return text.replace(regex, "");
}

export { removeTags }