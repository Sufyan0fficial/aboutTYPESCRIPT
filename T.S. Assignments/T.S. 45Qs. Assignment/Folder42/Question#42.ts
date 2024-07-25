let musiciansArray: string[] = [
  "Derrin Brown",
  "Doug Henning",
  "Dynamo",
  "Cris Angel",
  "David Blain",
];

function show_magicians(magicians: string[]) {
  function make_great(fName: string) {
    for (let name of magicians) {
      console.log(`${fName} ${name}`);
    }
  }
  make_great("the Great");
}

show_magicians(musiciansArray);
