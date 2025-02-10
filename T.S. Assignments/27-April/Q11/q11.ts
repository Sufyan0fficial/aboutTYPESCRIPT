function return__NewArray(Array: string[]) {
  let new__Array = Array.filter((array) => array.toLowerCase().startsWith("a"));

  console.log(new__Array);
}

return__NewArray(["Sufyan", "Ahmad", "Aslam", "Jahanzaib", "Ali"]);
