const Account_List = document.getElementById("acc-container")

//Pull accounts

getAccounts()

async function getAccounts() {

    const accounts = await fetch('/home/accounts')
    const data = await accounts.json()

    for(item of data){

         const fin = document.createElement('p');
            fin.href=("/")
            fin.className = "accs"

            const acc_id = document.createElement('div');
            const nickname = document.createElement('div');
            const avail_bal = document.createElement('div');

            const account_id_wrapper = document.createElement('div')
            account_id_wrapper.className = "AccountID"

            const account_balance_wrapper = document.createElement('div')
            account_balance_wrapper.className = "Accountbal"

            account_balance_wrapper.append(avail_bal)
            account_id_wrapper.append(nickname,acc_id)

             let formatter = new Intl.NumberFormat('en-US',{
              style:'currency',
              currency:'USD',
            })            

            let acc_nickname = item.account_nickname
            let UpperCase = acc_nickname.toUpperCase()

            let accounts = item.account_id
            let stringify = accounts.toString()
            let Spliced = stringify.slice(2)
            let censor = "***" + Spliced
            
            acc_id.textContent = ` ${censor}`
            nickname.textContent = `${UpperCase}`
            avail_bal.textContent =  formatter.format(item.available_balance)

            fin.append(account_id_wrapper,account_balance_wrapper);
            Account_List.append(fin);
        }
}


//Dropdowns

// const debit = document.getElementById()

// async function dropdown() {

    
// }


//Send Account transfers

const acc_transfer = document.querySelector('.acc_transfer');

acc_transfer.addEventListener('submit', async (e) => {

  e.preventDefault();

  const transfer= new FormData(acc_transfer);
  const info = Object.fromEntries(transfer);

  const Make = {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(info)
 }   
    const response = await fetch('/acctransfer',Make);
    let data = await response.json();
    
    console.log(data)
})