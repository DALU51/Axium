
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
--     4322211,
--     100000.00,
--     529955,
--     "2025-07-22",
--     "FR123HUe123",
--     "This is a second car",
--     "AMG",
--     "2025",
--     "Mercedes Benz",
--     "2 door",
--     "Yellow",
--     "Automatic",
--     20,
--     "Gas",
--     "Mercedes-AMG"
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

-- DELETE FROM Transactions WHERE transations_date_time = '2025-07-24 21:27:39'
-- DELETE FROM Transactions WHERE transaction_id = "f7mf3e9d0b4"

-- DELETE FROM Cars WHERE ID = 4322211
-- DELETE FROM Accounts WHERE Account_id = 352636

-- ALTER TABLE Transactions
-- DROP FOREIGN KEY transactions_ibfk_2;

-- SELECT TABLE_NAME, CONSTRAINT_TYPE, CONSTRAINT_NAME
-- FROM information_schema.table_constraints
-- WHERE table_name='Transactions';


-- ALTER TABLE Cars
-- ADD 
--     Title VARCHAR(255)
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

-- INSERT INTO Cars ( Title ) VALUES
-- ('Mercedes AMG'),
-- ('Hyundai Genesis'),
-- ('Hyundai Elantra');