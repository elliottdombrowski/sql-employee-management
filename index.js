// REQUIRE INQUIRER PACKAGE
const inquirer = require('inquirer');
// REQUIRE MYSQL
const mysql = require('mysql2');

// DECLARE PORT TO LISTEN ON - LOCAL && DYNAMIC

// CONNECT TO MYSQL DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MYSQL USERNAME
        user: 'root',
        // ADD MYSQL PASSWORD
        // TODO - REMOVE MY PASSWORD BEFORE DEPLOY
        password: 'Ajira316!',
        // TODO - ADD DATABASE
        database: 'management_db'
    },
    console.log("connected to **TODO - INSERT DATABASE NAME** database.")
);

db.connect(err => {
    if(err)throw err;
    managerMenu()
});

var menuMap = {
    "View All Departments": () => {
        console.log('in all dept');
        viewAllDepartments();
    },

    "View All Roles": () => {
        console.log('in all roles');
        viewAllRoles();
    },

    "View All Employees": () => {
        console.log('in all employees');
        viewAllEmployees();
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
    inquirer.prompt(
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

const viewAllDepartments = () => {
    db.query("SELECT * FROM departments", function(err, res) {
        if(err)throw err;
        console.table(res);
        managerMenu();
    });
};

const addDepartment = () => {
    return inquirer.prompt(
        [
            {
                type: "input",
                //GOTTA MATCH SCHEMA NAME
                name: "department_name",
                message: "Add New Department Name",
            }
        ]
    ).then(data => {
        db.query("INSERT INTO departments SET ?", data, function(err, res) {
            if(err)throw err;
            managerMenu();
        });
    });
};

const viewAllRoles = () => {
    db.query("SELECT * FROM roles", function(err, res) {
        if(err)throw err;
        console.table(res);
        managerMenu();
    });
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


const viewAllEmployees = () => {
    db.query("SELECT * FROM employees", function(err, res) {
        if(err)throw err;
        console.table(res);
        managerMenu();
    });
};

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


