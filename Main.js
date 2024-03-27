import inquirer from "inquirer";
let mypin = 9798;
let mybalance = 10000;
let pinAnswer = await inquirer.prompt([
    { type: "number",
        message: "Enter Your Pin",
        name: "pin"
    },
]);
console.log(pinAnswer);
if (pinAnswer.pin === mypin) {
    console.log("Correct Pin Code");
}
else {
    console.log("Incorrect Pin Code");
}
let operationans = await inquirer.prompt([
    {
        name: "operations",
        type: "list",
        mesege: "Please select option",
        choices: ["withdrawl", "check balance"]
    }
]);
if (operationans.operations === "withdrawl") {
    let amountanswer = await inquirer.prompt([
        {
            name: "Amount",
            message: "Enter Your Amount",
            type: "number",
        }
    ]);
    console.log(operationans);
    mybalance -= amountanswer.Amount;
    console.log("your remaining balance is:" + mybalance);
}
else if (operationans.operations === "check balance  ") {
    console.log("your remaining balance is: " + mybalance);
}
