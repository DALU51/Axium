
-- ALTER TABLE Body
-- MODIFY COLUMN carType VARCHAR(255);

-- CREATE TABLE Cars (
--     ID INT PRIMARY KEY NOT NULL,
--     Price DECIMAL,
--     userID INT NOT NULL,
--     addedDate DATE,
--     VIN VARCHAR(255),
--     descript VARCHAR(255)
-- )

-- CREATE TABLE Body (
--     ID INT,
--     carType DECIMAL,
--     makeYear INT,
--     model VARCHAR(255),
--     vehicle_Trim VARCHAR(255),
--     color VARCHAR(255),
--     FOREIGN KEY (ID) REFERENCES Cars(ID)
-- )

-- CREATE TABLE Performance (
--     ID INT,
--     transmission DECIMAL,
--     millage INT,
--     fuelType VARCHAR(255),
--     FOREIGN KEY (ID) REFERENCES Cars(ID)
-- )

-- DELETE FROM Cars WHERE userID = 529955;

-- INSERT INTO Cars 
-- VALUES (
--     22233342,
--     12000.00,
--     529955,
--     "2025-07-22",
--     "434ffer4351",
--     "One of the most blest cars",
--     "Hyundai",
--     "2013",
--     "Genesis",
--     "4 door",
--     "blue",
--     "Manual",
--     150000,
--     "Gas"
-- )

-- INSERT INTO Body 
-- VALUES (
--     4322211,
--     "Mercedes Benz",
--     "2025",
--     "CLS-250",
--     "2 door",
--     "Black"
-- )

-- INSERT INTO Performance 
-- VALUES (
--     4322211,
--     "Automatic",
--     20,
--     "Gas"
-- )

-- SELECT * FROM Body;
-- SELECT * FROM Cars;
-- SELECT * FROM Performance
-- SELECT * FROM Transactions
-- SELECT * FROM Accounts
-- SELECT * FROM Users

-- DELETE FROM Accounts WHERE account_id = 231405
-- DELETE FROM Transactions WHERE dr_account = 811866

-- ALTER TABLE Transactions
-- DROP FOREIGN KEY transactions_ibfk_2;

-- SELECT TABLE_NAME, CONSTRAINT_TYPE, CONSTRAINT_NAME
-- FROM information_schema.table_constraints
-- WHERE table_name='Transactions';


-- ALTER TABLE Cars
-- ADD 
    -- carType VARCHAR(255);
    -- makeYear INT;
    -- model VARCHAR(255);
    -- vehicle_Trim VARCHAR(255);
    -- color VARCHAR(255);
    -- transmission VARCHAR(255);
    -- millage DECIMAL;
    -- fuelType VARCHAR(50);

-- CREATE INDEX Find_Car
-- ON Cars (ID, userID, VIN, millage, Price);