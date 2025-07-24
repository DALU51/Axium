const Transactions = document.getElementById('Transactions')


transactions()

async function transactions() {

    const transact = await fetch("/transact")
    const data = await transact.json()    

    for (item of data) {

        const trans_Container = document.createElement("a")
            trans_Container.href = "/"
            trans_Container.className = "trans_Container"

        
        let id = item.transaction_id
        let caps = id.toUpperCase()

        const transID = document.createElement("div")
            transID.className = "transID"
            transID.textContent = "Refernce Number: " + caps


        let y = item.transation_date_time
        let x = y.split('T')[0]
        
        const transactionDTM = document.createElement("div")
            transactionDTM.className = "transID"
            transactionDTM.textContent = "Date: " + x


        let formatter = new Intl.NumberFormat('en-US',{
              style:'currency',
              currency:'USD',
            })   

        const amount = document.createElement("div")
            amount.className = "transID"
            amount.textContent = "Amount: " + formatter.format(item.transaction_amount)

        const From_To_Wrapper = document.createElement("div")
            From_To_Wrapper.className ="from_to"

            
            const Acc = document.createElement("div")
            Acc.className = "transID"
            Acc.textContent = "From " + item.dr_account + " To " + item.cr_account

        From_To_Wrapper.append(Acc)
        trans_Container.append(transID,transactionDTM,From_To_Wrapper,amount)
        Transactions.append(trans_Container)
    }
    
}