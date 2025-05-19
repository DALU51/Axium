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
    // let data = await response.json();
    
    // console.log(data)
})