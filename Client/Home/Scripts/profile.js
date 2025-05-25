const profile = document.getElementById('Profile')

//User profile 

async function getBalances() {

    const balance = await fetch('/home/balances')
    const data = await balance.json()

    return data
}

function UsrPro(){

    const container = document.createElement("div")
    container.className = "Container"

    const imgCont = document.createElement("div")
    imgCont.className = "profile-Container"

    const UserImg = document.createElement("img")
    UserImg.className = "Usr-Image" 

    const profile = document.createElement("div")
    profile.className = "User-info"

    const userName = function name(){
        x = document.createElement("p")
        x.className = "UsrNm"
        x.textContent = "Dalu"
        return x
    }

    const online = function status(){
        y = document.createElement("p")
        y.className = "Date"
        y.textContent = new Date().toLocaleDateString()
        return y
    }

    profile.append(userName(),online())
    imgCont.append(UserImg,profile)

    const availBal = () => {

        let container = document.createElement("div")
        container.className = "Balance-Container"

        let balance = document.createElement("h3")
        balance.textContent = getBalances()
        balance.className = "Balance"

        let msg = document.createElement("p")
        msg.textContent = "Available Balance"
        msg.className = "Message"

        container.append(msg,balance)
        return container
    }

    container.append(imgCont,availBal())
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