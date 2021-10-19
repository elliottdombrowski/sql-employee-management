// REQUIRE INQUIRER PACKAGE
const inquirer = require('inquirer');
// REQUIRE CONSOLE.TABLE PACKAGE
const cTable = require('console.table');
// REQUIRE MYSQL
const mysql = require('mysql2');

// CONNECT TO MYSQL DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MYSQL USER
        user: 'root',
        // ADD MYSQL PASSWORD
        // TODO - REMOVE MY PASSWORD BEFORE DEPLOY
        password: 'Ajira316!',
        // DATABASE TO CONNECT TO
        database: 'management_db'
    },
);

// CONNECT TO MYSQL DB
db.connect(err => {
    //THROW ERROR IF UNSUCCESSFUL
    if(err)throw err;
    //CALL INITIAL MANAGER MENU IN INQUIRER
    managerMenu()
});

//DECLARE OBJECT HOLDING FUNCTIONS TO CALL FOLLOWING PROMPTS FOR DEPARTMENTS/ROLES/EMPLOYEES
var menuMap = {
    "View All Departments": () => {
        viewAllDepartments();
    },

    "View All Roles": () => {
        viewAllRoles();
    },

    "View All Employees": () => {
        viewAllEmployees();
    },
    
    "Add a Department": () => {
        addDepartment();
    },

    "Add a Role": () => {
        addRole();
    },

    "Add an Employee": () => {
        addEmployee();
    },

    "Update an Employee Role": () => {
        updateEmployee();
    }
};

//FUNCTION TO PROMPT MANAGER, PROVIDES OPTIONS TO VIEW OR ADD ROLES/DEPARTMENTS/EMPLOYEES
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
        // IF RESPECTIVE OPTION IS SELECTED, REFERENCE MENUMAP OBJECT TO DISPLAY RESPECTIVE DB TABLE
        menuMap[choices.option]();
    })
}

//VIEW ALL DEPARTMENTS IN MYSQL DB
const viewAllDepartments = () => {
    //SELECT/VIEW DEPARTMENT TABLE
    db.query("SELECT * FROM departments", function(err, res) {
        if(err)throw err;
        console.table(res);
        //RETURN ORIGINAL MENU TO SELECT OR ADD A NEW ROLE/DEPARTMENT/EMPLOYEE
        managerMenu();
    });
};

//ADD NEW DEPARTMENT TO MYSQL DB
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
        //ADD NEW DEPARTMENT INTO TABLE, CALL UP MANAGER MENU
        db.query("INSERT INTO departments SET ?", data, function(err, res) {
            if (err) {
                console.log("------------------------");
                console.log("");
                console.log("Please enter a valid department");
                console.log("");                    
                console.log("------------------------");
            };
            managerMenu();
        });
    });
};

//VIEW ALL ROLES IN MYSQL DB
const viewAllRoles = () => {
    //SELECT ROLES TABLE FROM DB, DISPLAY TABLE, AND RETURN TO MANAGER MENU
    db.query("SELECT * FROM roles", function(err, res) {
        if(err)throw err;
        console.table(res);``
        managerMenu();
    });
};

//ADD NEW ROLE TO MYSQL DB
const addRole = () => {
    //SELECT AND DISPLAY DEPARTMENT NAME AND ID FROM DEPARTMENTS TABLE
    db.query("SELECT department_name AS name, department_id AS value FROM departments", function(err, res) {
        if(err)throw err;
        console.table(res);

        return inquirer.prompt(
            [
            {
                type: "input",
                name: "role_title",
                mesage: "Please Enter Your New Role's Title",
            },
            {
                type: "input",
                name: "role_salary",
                message: "Please Enter Your Role's Salary",
            },
            {
                type: "list",
                name: "role_department",
                message: "Please Enter Which Department This Role Applies To",
                choices: res
            },
        ]
        ).then(data => {
            //THEN INSERT NEW ROLE INTO DB ROLES TABLE, THROW ERROR IF UNSUCCESSFUL, AND RETURN TO MANAGER MENU
            db.query("INSERT INTO roles SET ?", data, function(err, res) {
                if (err) {
                    console.log("------------------------");
                    console.log("");
                    console.log("Please enter a valid role");
                    console.log("");                    
                    console.log("------------------------");
                };
                managerMenu();
            });
        });
    });
};

//VIEW ALL CURRENT EMPLOYEES
const viewAllEmployees = () => {
    //SELECT ALL FROM EMPLOYEES TABLE, THROW ERROR IF UNSUCCESSFUL, AND RETURN TO MANAGER MENU
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
                name: "employee_first",
                message: "Please Enter New Employee's First Name",
            },
            {
                type: "input",
                name: "employee_last",
                message: "Please Enter New Employee's Last Name",
            },
            {
                type: "input",
                name: "employee_role",
                message: "Please Enter New Employee's Role ID",
            },
            {
                type: "input",
                name: "employee_manager_id",
                message: "Please Enter New Employee's Manager ID",
            },
        ]
    ).then(data => {
        //THEN INSERT NEW EMPLOYEE INTO EMPLOYEE TABLE, THROW ERROR IF UNSUCCESSFUL, AND RETURN TO MANAGER MENU
        db.query("INSERT INTO employees SET ?", data, function(err, res) {
            if (err) {
                console.log("------------------------");
                console.log("");
                console.log("Please enter valid employee information");
                console.log("");                    
                console.log("------------------------");
            };
            managerMenu();
        });
    });
};

const updateEmployee = () => {
    db.query("SELECT employee_first, employee_last, emp_id AS value FROM employees", function(err, res) {
        if(err)throw err;
        console.table(res);
        return inquirer.prompt(
            [
                {
                    type: "list",
                    name: "emp_id",
                    message: "Please Choose an Employee to Update",
                    choices: res
                },
                {
                    type: "input", 
                    name: "employee_role",
                    message: "Please Choose a New Role ID For Your Employee"
                },
            ]
        ).then(data => {
            //THEN UPDATE EMPLOYEE IN EMPLOYEE TABLE, THROW ERROR IF UNSUCCESSFUL, AND RETURN TO MANAGER MENU
            db.query("UPDATE employees SET employee_role=? WHERE emp_id=?", [data.employee_role, data.emp_id], function(err, res) {
                if (err) {
                    console.log("------------------------");
                    console.log("");
                    console.log("Please enter a valid role");
                    console.log("");                    
                    console.log("------------------------");
                };
                managerMenu();
            });
        });
    });
};