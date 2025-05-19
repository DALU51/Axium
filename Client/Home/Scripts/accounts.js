const time = document.getElementById("time")


time.append(message())

//Pull accounts

getAccounts()

async function getAccounts() {

    const accounts = await fetch('/home/accounts')
    const data = await accounts.json()

    for(item of data){

    }
    
}