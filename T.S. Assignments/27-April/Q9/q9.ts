import inquirer from "inquirer";

async function Age() {
  const userAge = await inquirer.prompt ([
    {
      type: "input",
      message: "Please Enter your Age : ",
      name: "age",
    },
  ]);

  if (userAge.age >= 18) {
    console.log("You are Adult");
  } else console.log("You are Minor");
}

Age();
