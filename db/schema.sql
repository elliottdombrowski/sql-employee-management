DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;
USE management_db;

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    role_salary DECIMAL(6, 3) NOT NULL,
    role_department INT NOT NULL,
    
    FOREIGN KEY (role_department)
    REFERENCES departments(department_id)
    ON DELETE CASCADE
);

CREATE TABLE employees (
    emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_first VARCHAR(30) NOT NULL,
    employee_last VARCHAR(30) NOT NULL,
    employee_role INT NOT NULL,
    employee_manager_id INT,
    
    FOREIGN KEY (employee_role)
    REFERENCES roles(role_id)
    ON DELETE CASCADE,

    FOREIGN KEY (employee_manager_id)
    REFERENCES employees(emp_id)
    ON DELETE SET NULL
);

