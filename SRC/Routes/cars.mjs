import express from "express"
import db from "./database.mjs"

const router = express();



router.route("/")
    .post((req,res) => {

        console.log("New car Info received")

        const Car = req.body

        const createDate = new Date();
        Car.addedDate = createDate.toISOString().split('T')[0];
        const carID = Math.random().toString().slice(2,10);
        Car.ID = carID;

        try {
            db.promise().query('INSERT INTO Cars VALUES (?,?,?,?,?,?,?)'
                [
                    Car.ID,
                    Car.Price,
                    Car.userID,
                    Car.addedDate,
                    Car.Price,
                    Car.VIN,
                    Car.description
                ])

            db.promise().query('INSERT INTO Body VALUES (?,?,?,?,?,?,?)'
                [
                    Car.ID,
                    Car.Type,
                    Car.MakeYear,
                    Car.Model,
                    Car.Trim,
                    Car.Color
                ])

                db.promise().query('INSERT INTO Performance VALUES (?,?,?,?)'
                [
                    Car.ID,
                    Car.Transmission,
                    Car.Millage,
                    Car.FuelType
                ])

                console.log(Car)
                console.log (`Vehicle inventory created by ${Car.userID} with ID (${Car.ID}), Sent to Database`)
            
        } catch (error) {
            console.error('Did not post')
            console.log(error)
        }

        res.json(`${Car.ID} Registered`);

    })
    .get((req,res) => {

        carInfo()

        function carInfo() {

            db.query('SELECT * FROM Cars where userID =?',[req.body],(err,rows) => {

                
                res.json(rows)
            })

        }

        const Body = () => {

        }

        const Performance = () => {

        }
    })
    .put(() => {

    })
    .delete(() => { 

    })

