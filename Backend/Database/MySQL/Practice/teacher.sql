CREATE DATABASE IF NOT EXISTS college;

USE college;

-- create table
CREATE TABLE teacher (
	id INT PRIMARY KEY,
    name varchar(50),
    subject varchar(50),
    salary INT
);

-- insert values into the table 
INSERT INTO teacher 
(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

-- select teacher whose salary is more than 55k
SELECT * FROM teacher 
WHERE salary > 55000;

-- rename the salary column of teacher table to ctc
ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

SET SQL_SAFE_UPDATES = 0;

-- update salary of all teachers to give them increament of 25
UPDATE teacher
SET ctc = ctc + ctc * 0.25;

-- creating new column for teacher city
ALTER TABLE teacher 
ADD COLUMN city VARCHAR(50) DEFAULT "Gurgaon";

-- deleting the salary column from teacher 
ALTER TABLE teacher 
DROP COLUMN ctc;

SELECT * FROM teacher;