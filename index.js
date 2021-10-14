// REQUIRE INQUIRER PACKAGE
const inquirer = require('inquirer');

var menuMap = {
    "View All Departments": () => {
        console.log('in all dept');
    },

    "View All Roles": () => {
        console.log('in all roles');
    },

    "View All Employees": () => {
        console.log('in all employees');
    },
    
    "Add a Department": () => {
        console.log('in add department');
    },

    "Add a Role": () => {
        console.log('in add role');
    },

    "Add an Employee": () => {
        console.log('in add employee');
    },

    "Update an Employee Role": () => {
        console.log('in update employee');
    }
};

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
    ).then(choices => {
        // IF RESPECTIVE OPTION IS SELECTED, DISPLAY RESPECTIVE DB TABLE
        menuMap[choices.option]();
        // CALL UP MENU AGAIN
        managerMenu();
    })
}

managerMenu()

