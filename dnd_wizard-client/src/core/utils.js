export const findFieldName = (query, id) => {
  const index = query.findIndex((dict) => dict.id == id);
  return query[index].name;
};
