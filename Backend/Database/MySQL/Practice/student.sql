USE college;

CREATE TABLE student (
	roll_no INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50),
    marks INT
);

INSERT INTO student 
(roll_no, name, city, marks)
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "cassey", "Pune", 94),
(112, "duke", "Pune", 80);

-- to view full table
SELECT * FROM student;

-- select all the student who score 75+
SELECT * FROM student
WHERE marks > 75;

-- name of city where all student are from
SELECT DISTINCT city FROM student;

-- maximum marks of student from each city
SELECT city, max(marks)
FROM student
GROUP BY city;

-- the average of the class
SELECT avg(marks)
FROM student;

-- adding a new column grade
ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

SET SQL_SAFE_UPDATES = 0;

-- grading student according to there marks
UPDATE student
SET grade = "O"
WHERE marks >= 80;

UPDATE student
SET grade = "A"
WHERE marks >= 70 AND marks < 80;

UPDATE student
SET grade = "B"
WHERE marks >= 60 AND marks < 70;

