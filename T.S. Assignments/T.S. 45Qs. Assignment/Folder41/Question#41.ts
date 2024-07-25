let musiciansArray: string[] = [
  "Derrin Brown",
  "Doug Henning",
  "Dynamo",
  "Cris Angel",
  "David Blain",
];

function show_magicians(magicians: string[]) {
  for (let name of magicians) {
    console.log(name);
  }
}

show_magicians(musiciansArray);
