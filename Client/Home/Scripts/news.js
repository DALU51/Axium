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

    const submit = document.createElement('input')
        submit.type = "Submit"
        submit.className = "Search_submit"
        submit.placeholder="Search..."

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

    for (item of data){

        const vehicleWrapper = document.createElement('a')
            vehicleWrapper.className = "vehicle_wrapper"
        
        const imgVehicle = document.createElement('img')
        const general = document.createElement('div')

        const info = document.createElement('div')
        const body = document.createElement('div')
        const Performance = document.createElement('div')

        general.append(info,body,Performance)
        vehicleWrapper.append(imgVehicle,general)
    }
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
