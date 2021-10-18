INSERT INTO departments (department_name, department_id)
VALUES ("Front End", 1),
       ("Chef's Kitchen", 2),
       ("Farm Stand", 3);

INSERT INTO roles (role_title, role_salary, department_id, role_id)
VALUES ("Front End Manager", 1, 1),
       ("Cashier", 1, 2),
       ("Deli Associate", 2, 3),
       ("Sandwich Guy", 2, 4),
       ("Produce Manager", 3, 5),
       ("Produce Associate", 3, 6);

INSERT INTO employees (employee_first, employee_last, role_id)
VALUES ("Joe", "Mama", 1),
       ("Unforunate", "Cashier", 2),
       ("Bill", "Whatshisname", 3),
       ("Frank", "Theveryitalianguy", 4),
       ("Connie", "Someotherlastname", 5),
       ("Elliott", "Dombrowski", 6);

