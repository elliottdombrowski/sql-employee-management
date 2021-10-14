// REQUIRE INQUIRER PACKAGE
const inquirer = require('inquirer');

var menuMap = {
    "View All Departments": () => {
        console.log('in all dept');
        // CALL UP MENU AGAIN
        managerMenu();
    },

    "View All Roles": () => {
        console.log('in all roles');
        // CALL UP MENU AGAIN
        managerMenu();
    },

    "View All Employees": () => {
        console.log('in all employees');
        // CALL UP MENU AGAIN
        managerMenu();
    },
    
    "Add a Department": () => {
        console.log('in add department');
        addDepartment();
    },

    "Add a Role": () => {
        console.log('in add role');
        addRole();
    },

    "Add an Employee": () => {
        console.log('in add employee');
        addEmployee();
    },

    "Update an Employee Role": () => {
        console.log('in update employee');
        updateEmployee();
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
    })
}

const addDepartment = () => {
    return inquirer.prompt(
        [
            {
                type: "input",
                name: "newDepartment",
                message: "Add New Department Name",
            }
        ]
    )
};

const addRole = () => {
    return inquirer.prompt(
        [
            {
                type: "input",
                name: "newRoleName",
                mesage: "Please Enter Your New Role's Title",
            },
            {
                type: "input",
                name: "newRoleSalary",
                message: "Please Enter Your Role's Salary",
            },
            {
                type: "list",
                name: "newRoleDept",
                message: "Please Enter Which Department This Role Applies To",
                choices: [
                    // HOW TO INSERT ALL DEPARTMENTS DYNAMICALLY?
                ],
            },
        ]
    )
}

const addEmployee = () => {
    return inquirer.prompt(
        [
            {
                type: "input",
                name: "firstname",
                message: "Please Enter New Employee's First Name",
            },
            {
                type: "input",
                name: "lastname",
                message: "Please Enter New Employee's Last Name",
            },
            {
                type: "input",
                name: "newEmployeeRole",
                message: "Please Enter New Employee's Role",
            },
            {
                type: "input",
                name: "newEmployeeManager",
                message: "Please Enter New Employee's Manager",
            },
        ]
    )
}

const updateEmployee = () => {
    return inquirer.prompt(
        [
            {
                type: "list",
                name: "updateEmployeeRole",
                message: "Please Choose an Employee to Update",
                choices: [
                    //TODO: ENTER EMPLOYEE NAMES DYNAMICALLY
                ]
            }
        ]
    )
}

managerMenu()

