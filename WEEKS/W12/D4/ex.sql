-- Subqueries
-- Write a query to find the first_name, last_name and salaries of the employees who
-- have a higher salary than the employee whose last_name is Bull.
-- SELECT first_name, last_name, salary FROM employees
-- WHERE salary > (SELECT salary FROM employees WHERE last_name like '%Bell%')

-- Write a SQL subquery to find the first_name and last_name of the employees under a
-- manager who works for a department based in the United States.
-- Hint : Write single-row and multiple-row subqueries
-- WITH id_managers_from_us as 
-- (SELECT employee_id FROM employees
-- LEFT JOIN departments on departments.department_id = employees.department_id
-- where departments.location_id in (
--     SELECT location_id FROM locations where locations.country_id = 'US'))
-- SELECT first_name, last_name from employees
-- WHERE manager_id in (SELECT * FROM id_managers_from_us)

-- Write a SQL subquery to find the first_name and last_name of the employees who are working as managers.
-- SELECT first_name, last_name FROM employees
-- WHERE employee_id in (SELECT DISTINCT manager_id FROM employees)

-- Write a SQL subquery to find the employee(s) first_name and last_name, which salary is
-- greater than the average salary of the employees.
-- SELECT first_name, last_name FROM employees
-- WHERE salary > (SELECT avg(salary) from employees)

-- Write a SQL subquery to find the employee(s) first_name and last_name, which salary is
-- equal to the minimum salary of their job position.
-- with min_job_salary as (
-- SELECT first_name, last_name FROM employees
-- INNER JOIN jobs
-- ON jobs.job_id = employees.job_id
-- and jobs.min_salary = employees.salary

-- Write a query to find the names (first_name, last_name) of the employees who are not supervisors.
-- SELECT first_name, last_name FROM employees
-- where job_id not in (SELECT job_id FROM jobs WHERE job_title = 'Supervisor')

-- Write a SQL subquery to find the employee(s) ID, first name, last name and salary of all
-- employees whose salary is above the average salary for their departments.
-- with avg_dep_sal as (
--     SELECT distinct department_id, avg(salary) over (partition by department_id) as avg_sal
--     from employees
-- )
-- SELECT employee_id, first_name, last_name, salary FROM employees
-- LEFT join avg_dep_sal on avg_dep_sal.department_id = employees.department_id
-- where employees.salary > avg_dep_sal.avg_sal

-- Write a subquery to find the 5th maximum salary of all salaries.
-- SELECT salary FROM employees ORDER BY salary DESC
-- LIMIT 1 offset 5

-- Write a subquery to find the 4th minimum salary of all the salaries.
-- SELECT salary FROM employees ORDER BY salary asc
-- LIMIT 1 offset 4

-- Write a query to list the department name and number, of all the departments in which there are no employees.
-- SELECT department_name, department_id FROM departments WHERE department_id not in (
--     SELECT DISTINCT department_id FROM employees
-- )
--
-- Joins
--
-- Write a query to find the addresses (location_id, street_address, city, state_province,
-- country_name) of all the departments.
-- SELECT locations.location_id, street_address, city, state_province, country_name from locations
-- INNER JOIN departments ON departments.location_id = locations.location_id
-- INNER JOIN countries ON locations.country_id = countries.country_id

-- Write a query to make a join with the employees and departments table to find the name
-- of the employee, including first_name and last name, department ID and name of departments.
-- SELECT first_name, last_name, employees.department_id, department_name from employees
-- LEFT JOIN departments on departments.department_id = employees.department_id

-- Write a SQL query to make a join with three tables: employees, departments and locations
-- to find the name, including first_name and last_name, jobs, department name and ID, of the employees working in London.
-- SELECT first_name, last_name, job_title, employees.department_id, department_name from employees
-- LEFT JOIN departments on departments.department_id = employees.department_id
-- LEFT JOIN jobs on jobs.job_id = employees.job_id

-- Write a query to make a join with two tables to find the employee id, last_name as Employee
-- along with their manager_id and last name as Manager.
-- SELECT employees.employee_id, employees.last_name as Employee,
--     employees.manager_id, employees2.last_name as Manager from employees
-- LEFT JOIN employees as employees2 ON employees.manager_id = employees2.employee_id

-- Write a query to make a join with two tables employees and departments, to get the employees
-- working in each department (retrieve the employees details, and the department name and number).
-- SELECT *, department_name FROM employees
-- LEFT JOIN departments ON departments.department_id = employees.department_id

-- Write a query to make a join to find the employees who worked in a department which ID is 90
-- (retrieve the employee ID, job title and number of days the employee worked).
-- SELECT employee_id, job_title, CURRENT_DATE-hire_date as work_days FROM employees
-- LEFT JOIN jobs on jobs.job_id = employees.job_id

-- Write a query to make a join with three tables, departments, employees, and locations to
-- display the department name, manager name, and city.
-- WITH manager_names as (
--     SELECT distinct employees2.first_name, employees2.last_name, employees.department_id FROM employees
--     LEFT JOIN employees as employees2 ON employees.manager_id = employees2.employee_id
-- )
-- SELECT department_name, first_name, last_name, city from manager_names
-- LEFT JOIN departments on manager_names.department_id = departments.department_id
-- LEFT JOIN locations ON locations.location_id = departments.location_id

-- Write a query to make a join with two tables, employees and jobs to display the job title
-- and average salary of the employees.
-- SELECT job_title, round(avg(salary),2) as average_salary FROM jobs
-- LEFT JOIN employees ON employees.job_id = jobs.job_id
-- GROUP BY job_title

-- Write a query to make a join with two tables, employees and departments to display department
-- name, first_name and last_name, hire date and salary for all the managers who achieved a working
-- experience of more than 15 years.
-- WITH manager_names as (
--     SELECT distinct employees2.first_name,
--         employees2.last_name,
--         employees2.hire_date,
--         employees2.salary,
--         employees.department_id FROM employees
--     LEFT JOIN employees as employees2 ON employees.manager_id = employees2.employee_id
-- )
-- SELECT first_name, last_name, hire_date, salary, department_name FROM manager_names
-- LEFT JOIN departments on departments.department_id = manager_names.department_id
-- where EXTRACT(year from CURRENT_DATE) - EXTRACT(year from hire_date) > 15
---
-- String Function
--

-- Write a query to update phone_number records. If the the substring ‘124’ was found in that column,
-- update the phone_number to ‘999’.
-- UPDATE employees set phone_number  = replace(phone_number, '124', '999')

-- Write a query to find the details of the employees who contain eight or more characters in their first name.
-- SELECT * from employees where length(first_name) > 7

-- Write a query to join in uppercase, the first letter of the first_name, with the last_name,
-- with '@example.com‘ in the email column.
--   **Sample Output :**
--   EMAIL
--   --------------------
--   JDOE@example.com (where first_name is John, and last_name is Doe)
-- SELECT upper(substring(first_name from 1 for 1))||upper(last_name)||'@example.com' from employees

-- Write a query to get the employee id, email but discard the last three characters of the email.
-- SELECT employee_id, substr(email, 1, length(email)-3) from employees

-- Write a query to display the first word in the job title, if the job title contains more than one words.
-- SELECT 	substring(job_title from 1 for 1) FROM jobs WHERE position(' ' in job_title) > 0

-- Write a query that displays the first name and the length of the first name for all employees
-- whose name starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label.
-- Sort the results by the employees’ first names.
-- SELECT first_name as "Name", length(first_name) as "Name length" from employees
-- where SUBSTRING(first_name from 1 for 1) in ('A', 'J', 'M')
-- ORDER BY first_name

-- Write a query to display the first name and salary for all employees. Display the salary with
-- the $ symbol. Label the column as SALARY.
-- SELECT first_name, concat('$ ', salary) as SALARY FROM employees