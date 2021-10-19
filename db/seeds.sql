INSERT INTO departments (department_name, department_id)
VALUES ("Front End", 1),
       ("Chef's Kitchen", 2),
       ("Farm Stand", 3);

INSERT INTO roles (role_title, role_salary, role_department, role_id)
VALUES ("Front End Manager", 10.000,  1, 1),
       ("Cashier", 10.000, 1, 2),
       ("Deli Associate", 10.000, 2, 3),
       ("Sandwich Guy", 10.000, 2, 4),
       ("Produce Manager", 10.000, 3, 5),
       ("Produce Associate", 10.000, 3, 6);

INSERT INTO employees (employee_first, employee_last, employee_role, employee_manager_id)
VALUES ("Joe", "Mama", 1, 1),
       ("Unforunate", "Cashier", 2, 1),
       ("Bill", "Whatshisname", 5, 2),
       ("Frank", "Theveryitalianguy", 6, 2),
       ("Connie", "Someotherlastname", 3, 3),
       ("Elliott", "Dombrowski", 4, 3);

