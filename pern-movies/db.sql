CREATE DATABASE <database name>
CREATE TABLE table_name {
    column datatype
    column2 datatype
}

Create DATABASE pizzadatabase;

CREATE TABLE pizzatable {
    topping_id SERIAL PRIMARY KEY,
    topping VARCHAR(255)
}
SELECT * FROM pizzatable
//