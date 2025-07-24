// import db from "./database.mjs"

const cars = [
  {
    "ID": 4322211,
    "Price": "35000",
    "userID": 529955,
    "addedDate": "2025-07-21T04:00:00.000Z",
    "VIN": "Kajjj444233",
    "descript": "This is a second car",
    "carType": "Mercedes Benz",
    "makeYear": 2025,
    "model": "CLS-250",
    "vehicle_Trim": "2 door",
    "color": "Black",
    "transmission": "Automatic",
    "millage": "20",
    "fuelType": "Gas"
  },
  {
    "ID": 22233342,
    "Price": "12000",
    "userID": 529955,
    "addedDate": "2025-07-22T04:00:00.000Z",
    "VIN": "434ffer4351",
    "descript": "One of the most blest cars",
    "carType": "Hyundai",
    "makeYear": 2013,
    "model": "Genesis",
    "vehicle_Trim": "4 door",
    "color": "blue",
    "transmission": "Manual",
    "millage": "150000",
    "fuelType": "Gas"
  },
//   {
//     "ID": 75322123,
//     "Price": "23000",
//     "userID": 529955,
//     "addedDate": "2025-07-23T04:00:00.000Z",
//     "VIN": "23Ba4k355543",
//     "descript": "Another car",
//     "carType": "Hyundai",
//     "makeYear": 2025,
//     "model": "CLS-250",
//     "vehicle_Trim": "4 door",
//     "color": "blue",
//     "transmission": "Automatic",
//     "millage": "20000",
//     "fuelType": "Gas"
//   }
]

for (val of cars) {

    // Object.keys(val).forEach(key => {
    //     const value = val[key];
    //     console.log(`${key}: ${value}`);
    // });

    // Object.entries(val).map(entry => {
    //         let key = entry[0];
    //         let value = entry[1];
    //         console.log(key, value);
    //     });

    // for (const key in val) {
    //     if (val.hasOwnProperty(key)) {
    //         console.log(`${key}: ${val[key]}`);
    //     }
    // }


    let Body = {
        "carType": val.carType,
        "makeYear": val.makeYear,
        "model": val.model,
        "vehicle_Trim": val.vehicle_Trim,
        "color": val.color,
    }

    let Performance = {
        "transmission": val.transmission,
        "millage": val.millage,
        "fuelType": val.fuelType
    }

    let car = {
        ID: val.ID,
        Price: val.Price,
        userID: val.userID,
        addedDate: val.addedDate,
        VIN: val.VIN,
        Description: val.descript,
        Body,
        Performance
    }

    const data = car
    console.log(data); // ✅✅✅
}
