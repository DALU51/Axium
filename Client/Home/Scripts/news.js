const news = document.getElementById('news')
    news.style.display = "flex"

const stats = document.getElementById('searh_stats')
    stats.style.display = "flex"

const Car_container = document.createElement('div')
    Car_container.className = "Car_container"

const Bttn_Options = document.createElement('div')
    Bttn_Options.className = "Bttn_Options"

news.append(Car_container,Bttn_Options)

search_bar()

function search_bar(){

    const searchbar = document.createElement('div')
    searchbar.className = "search_bar"

    const form = document.createElement('form')
        form.className = "mainSearchForm"

    const searchBox = document.createElement('input')
        searchBox.className = "srch_box"
        searchBox.type = "text"
        searchBox.placeholder="Search..."
        searchBox.id = "searchBox"

    const submit = document.createElement('button')
        submit.type = "Submit"
        submit.className = "Search_submit"
        submit.placeholder="Search..."

    const span = document.createElement('span')
        span.className = "material-symbols-outlined"
        span.textContent = "search" 

    submit.append(span)
    form.append(submit,searchBox)
    searchbar.append(form)
    
    stats.append(searchbar)
}

createBttns()

function createBttns(){

    const buttonWrapper = document.createElement('div')
        buttonWrapper.className = "btn_Wrapper"

    const CreatePosting = document.createElement('button')
        CreatePosting.className = "create_buttons"
        CreatePosting.textContent = "Add Funds"
        CreatePosting.onclick = "✅"

    const CreateAccount = document.createElement('button')
        CreateAccount.className = "create_buttons"
        CreateAccount.textContent = "Create Account"
    
        const addAccount = CreateAccount.addEventListener('click', async event => {
            event.preventDefault();

            const User= {user_id: 529955};
            const data = User;

            const Make = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }   
            await fetch ('/home/CreateAccs',Make);
            location.reload()
        })

        CreateAccount.onclick = addAccount

    buttonWrapper.append(CreatePosting,CreateAccount)
    stats.append(buttonWrapper)
}

getCars()

async function getCars(){

    const Cars = await fetch('/cars')
    const data = await Cars.json()
   

    for (item of data) {

        const vehicleWrapper = document.createElement('a')
            vehicleWrapper.className = "vehicle_wrapper slides fade"
            vehicleWrapper.href = " "
        
        const imgVehicle = document.createElement('img')
            imgVehicle.src = `/Home/Lib/Images/${item.ID}.jpg`
            imgVehicle.alt = item.carType
            imgVehicle.className = "Vehicle_photo"

        const general = document.createElement('div')
            general.className = "classic_design"


        const info = document.createElement('div')

            const price = document.createElement('h2')
                let formatter = new Intl.NumberFormat('en-US',{
                    style:'currency',
                    currency:'USD',
                }) 
                price.textContent = formatter.format(item.Price)

            const title = document.createElement('h3')
                title.textContent = item.Title

            const body = document.createElement('div')

            const body_title = document.createElement('h4')
                body_title.textContent = "Body"

            const body_info = document.createElement('p')
                body_info.textContent = item.makeYear + " ⎜ " + item.carType + " ⎜ " + item.model + " ⎜ " + item.color

            const Performance = document.createElement('div')

            const Performance_title = document.createElement('h4')
                Performance_title.textContent = "Performance"

            const Performance_info = document.createElement('p')
                Performance_info.textContent = item.transmission + " ⎜ " + item.millage  + " KM"+ " ⎜ " + item.fuelType


        info.append(price,title)
        body.append(body_title,body_info)
        Performance.append(Performance_title,Performance_info)

        general.append(info,body,Performance)
        vehicleWrapper.append(imgVehicle,general)
        Car_container.append(vehicleWrapper)

        console.log(item)
        console.log(data[2])

        
    }
     

    const dots = document.createElement("div")
        dots.className = "dots"

    for(item of data){

        const dot_object = document.createElement("span")
            dot_object.className = "dot"
            dot_object.addEventListener("click",slideshow)
        dots.append(dot_object)
    }


  
    function slide(){
        console.log("hello")
        console.log(data[8])
        console.log("Logging...")
    }
    
        Car_container.appendChild(dots)
};

async function slideshow(){

    const Cars = await fetch('/cars')
    const Data = await Cars.json()

    let slideIndex = 0

    // showSlides(x)

    for(let i = 0;i < Data.length ; i++){

        slideIndex++

        // console.log(i)
        console.log(slideIndex)

    }

    async function showSlides(){
            
        const vehicleWrapper = document.createElement('a')
            vehicleWrapper.className = "vehicle_wrapper slides fade"
            vehicleWrapper.href = " "
        
        const imgVehicle = document.createElement('img')
            imgVehicle.src = `/Home/Lib/Images/${Data[slideIndex].ID}.jpg`
            imgVehicle.alt = item.carType
            imgVehicle.className = "Vehicle_photo"

        const general = document.createElement('div')
            general.className = "classic_design"


        const info = document.createElement('div')

            const price = document.createElement('h2')
                let formatter = new Intl.NumberFormat('en-US',{
                    style:'currency',
                    currency:'USD',
                }) 
                price.textContent = formatter.format(data[slideIndex].Price)

            const title = document.createElement('h3')
                title.textContent = Data[slideIndex].Title

            const body = document.createElement('div')

            const body_title = document.createElement('h4')
                body_title.textContent = "Body"

            const body_info = document.createElement('p')
                body_info.textContent = Data[slideIndex].makeYear + " ⎜ " + Data[slideIndex].carType + " ⎜ " + Data[slideIndex].model + " ⎜ " + Data[slideIndex].color

            const Performance = document.createElement('div')

            const Performance_title = document.createElement('h4')
                Performance_title.textContent = "Performance"

            const Performance_info = document.createElement('p')
                Performance_info.textContent = Data[slideIndex].transmission + " ⎜ " + Data[slideIndex].millage  + " KM"+ " ⎜ " + Data[slideIndex].fuelType


        info.append(price,title)
        body.append(body_title,body_info)
        Performance.append(Performance_title,Performance_info)

        general.append(info,body,Performance)
        vehicleWrapper.append(imgVehicle,general)
        Car_container.append(vehicleWrapper)
    }

    function showDots(slideIndex){

        const dot_object = document.createElement("span")
        dot_object.className = "dot"
        dot_object.addEventListener("click",showSlides(slideIndex))
        
    }

      const dots = document.createElement("div")
        dots.className = "dots"
    
    dots.append(

        showDots(),
        showDots(slideIndex++),
        showDots(slideIndex++),  

    )
}


    
function belowOptions(text , link){
    const Buttons = document.createElement('button')
        Buttons.className = "make_buttons"
        Buttons.textContent = text
        Buttons.onclick = link
    return Buttons
}

Bttn_Options.append(
    belowOptions("Add Payee"," "),
    belowOptions("Make Payment"," "),
    belowOptions("Create Posting"," "),
    belowOptions("Watchlist"," ")
)
