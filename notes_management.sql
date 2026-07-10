CREATE DATABASE notes_management;

USE notes_management;

CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO notes (title, description)
VALUES
('DBMS Notes', 'Introduction to Database Management System'),
('DSA Notes', 'Arrays, Linked List, Stack and Queue'),
('OS Notes', 'Process, Thread and Scheduling');

SELECT * FROM notes;

UPDATE notes
SET title = 'Updated DSA Notes',
    description = 'Arrays, Stack, Queue, Trees'
WHERE id = 2;

DELETE FROM notes
WHERE id = 3;

SELECT * FROM notes
WHERE title LIKE '%DSA%';
