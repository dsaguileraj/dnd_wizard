export const findFieldName = (query, id) => {
  const index = query.findIndex((dict) => dict.id == id);
  const category = query[index].name;
  return category ? category: "---";
};
