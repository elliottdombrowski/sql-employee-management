// REQUIRE INQUIRER PACKAGE
const inquirer = require('inquirer');

function managerMenu() {
    return inquirer.prompt(
        [
            {
                type: "list",
                name: "option",
                message: "Please Select an Option.",
                choices: [
                    "View All Departments",
                    "View All Roles",
                    "View All Employees",
                    "Add a Department",
                    "Add a Role",
                    "Add an Employee",
                    "Update an Employee Role",
                ],
            },
        ],
    ).then(name => {
        // IF RESPECTIVE OPTION IS SELECTED, DISPLAY RESPECTIVE DB TABLE

    })
}

managerMenu()


        // if (name.option === "View All Departments") {
        //     console.log("option 1");
        // } else if (name.option === "View All Roles") {
        //     console.log("option 2");
        // } else if (name.option === "View All Employees") {
        //     console.log("option 3");
        // } else if (name.option === "Add a Department") {
        //     console.log("option 4");
        // } else if (name.option === "Add a Role") {
        //     console.log("option 5");
        // } else if (name.option === "Add an Employee") {
        //     console.log("option 6");
        // } else if (name.option === "Update an Employee Role") {
        //     console.log("option 7");
        // }