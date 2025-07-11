const acc_transfer = document.querySelector('.acc_transfer');
const dr = document.querySelector('#dr')

dr.append(getAccountID())

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
    // let data = await response.json();
    
    // console.log(data)
})

async function getAccountID() {

    const accounts = await fetch('/home/accountID')
    const data = await accounts.json()

    for(item of data){

      const option = document.createElement('option')
            option.className = "accounts";
            option.textContent = item.account_id;

      
    }dr.append(option)
}