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
            db.promise().query('INSERT INTO Cars VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
                [
                    Car.ID,
                    Car.Price,
                    Car.userID,
                    Car.addedDate,
                    Car.VIN,
                    Car.descript,
                    Car.carType,
                    Car.makeYear,
                    Car.model,
                    Car.vehicle_Trim,
                    Car.color,
                    Car.transmission,
                    Car.millage,
                    Car.fuelType
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

        const user = 529955

        db.query('SELECT * FROM Cars WHERE userID = ?',[user],(err,rows) => {

            if (err) throw err

        rows.forEach( items => {

            let Body = {
                "carType": items.carType,
                "makeYear": items.makeYear,
                "model": items.model,
                "vehicle_Trim": items.vehicle_Trim,
                "color": items.color,
            }

            let Performance = {
                "transmission": items.transmission,
                "millage": items.millage,
                "fuelType": items.fuelType
            }

            let final = {
                ID: items.ID,
                Price: items.Price,
                userID: items.userID,
                addedDate: items.addedDate,
                VIN: items.VIN,
                Description: items.descript,
                Body,
                Performance
            }

            let arr = []

            for (let item of Array(3).fill(final)) {
                arr.push(item)
                console.log(arr)
             } 
            }); 
        res.json(rows)    
        })
    })

    .put(() => {

    })
    .delete(() => { 

    })

export default router