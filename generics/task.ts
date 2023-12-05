function sort<T extends { id: number }>(
  array: Array<T>,
  order: "asc" | "desc" = "asc"
): Array<T> {
  return array.sort((item1, item2) =>
    order === "asc" ? item1.id - item2.id : item2.id - item1.id
  );
}
