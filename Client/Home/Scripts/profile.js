const profile = document.getElementById('Profile')

//User profile 
function UsrPro(){

    const container = document.createElement("div")
    container.className = "Container"

     const profile = document.createElement("div")
    profile.className = "User-info"
    
    const UserImg = document.createElement("img")
    UserImg.className = "Usr-Image" 

    const imgCont = document.createElement("div")
    imgCont.className = "profile-Container"

    getUserProfile()

    async function getUserProfile() {

    const User = await fetch('/users/ind:userid')
    const data = await User.json()

    x = document.createElement("p")
        x.className = "UsrNm"
        x.textContent = data.username

    y = document.createElement("p")
        y.className = "Date"
        y.textContent = new Date().toLocaleDateString()

    profile.append(x,y)
    }

    imgCont.append(UserImg,profile)

    displayBalance()

    async function displayBalance() {

        const balance = await fetch('/home/balances')
        const data = await balance.json()

        let formatter = new Intl.NumberFormat('en-US',{
              style:'currency',
              currency:'USD',
            }) 

        let balanceDisplay = document.createElement("h3")
        let sumBalance = data

        balanceDisplay.textContent = formatter.format(sumBalance)
        balanceDisplay.className = "Balance"

        let Balcontainer = document.createElement("div")
            Balcontainer.className = "Balance-Container"

        let msg = document.createElement("p")
            msg.textContent = "Available Balance"
            msg.className = "Message"

        Balcontainer.append(msg,balanceDisplay)
        container.append(Balcontainer)
    }

    container.append(imgCont)
    return container
}

const Nav = document.createElement("div")
Nav.className = "Nav"

function menuOpts(span , name , link, ){
    const opts = document.createElement("a")
    const symbol = document.createElement("span")
    symbol.textContent = span
    symbol.className = "List"
    opts.textContent = name
    opts.href = link
    symbol.append(opts)
    return symbol
}

Nav.append(
    menuOpts("👺","Dashboard","/home"), 
    menuOpts("🤩","Cars","🤩"), 
    menuOpts("💰","Accounts","💰"),
    menuOpts("🏦","Transfer","")
)

const base = document.createElement("div")
base.className = "Base"

base.append(
    menuOpts("⚙️","Settings"," "),
    menuOpts("🚪","Sign-Out","/")
)

profile.append(UsrPro(),Nav,base)