let musiciansArray: string[] = [
  "Derrin Brown",
  "Doug Henning",
  "Dynamo",
  "Cris Angel",
  "David Blain",
];

let updatedName: string[] = [];

function show_magicians(magicians: string[]) {
  function make_great(fName: string) {
    for (let name of magicians) {
      updatedName.push(`${fName} ${name}`);
    }
  }
  make_great("the Great");
  console.log(musiciansArray);
  console.log(updatedName);
}

show_magicians(musiciansArray);
