function filterArray(array: any[]) {
  return array.filter(Boolean);
}
console.log(filterArray([1, 0, null, "Sufyan", NaN]));
