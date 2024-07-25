function make_shirt(
  size: string = "large",
  message: string = "I love Typescript"
) {
  console.log(`Size of shirt : ${size} \nMessage Printed : ${message}`);
}
make_shirt();

make_shirt("medium");

make_shirt("any", "I love JavaScript");
