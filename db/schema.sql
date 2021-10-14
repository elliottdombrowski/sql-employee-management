DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;
USE management_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(20) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_titles VARCHAR(20) NOT NULL
    role_salary INT NOT NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_first VARCHAR(20) NOT NULL,
    employee_last VARCHAR(20) NOT NULL,
    employee_role VARCHAR(20) NOT NULL,
    employee_manager VARCHAR(20)
    
    FOREIGN KEY (dept_id)
    REFERENCES departments(department_name)
    ON DELETE SET NULL

    FOREIGN KEY (emp_role)
    REFERENCES roles(role_salary)
    ON DELETE SET NULL
);

