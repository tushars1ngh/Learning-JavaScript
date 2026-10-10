
const account = {
    name: "Virat Kohli",
    balance: 120000,
    pin: 1818
};

const transaction = [
    { type: "deposit", amount: 3000, pin: 1818 },
    { type: "withdraw", amount: 10000, pin: 9999 },
    { type: "checkBalance", pin: 1818 }
];



const processTransactions = (transaction) => {

    for (let items of transaction) {

        if(items.type !== "checkBalance"){
            console.log(`Transcation: ${items.type} |  Amount: ${items.amount}`);
        }else{
            console.log(`Transcation: ${items.type}`);
        }
        

        // PIN VALIDATION
        if (items.pin !== account.pin) {
            console.log("Error: Wrong PIN. Please try again.");
            console.log("----------------------------");
            continue; 
        }


        // SAVE BALANCE BEFORE TRANSACTION
        const CurrBalance = account.balance;
        console.log("Balance before transaction:", CurrBalance);



        // TRANSCATION TYPE
        if (items.type === "deposit") {

            if (items.amount <= 0) {
                console.log("Error: Invalid deposit amount.");
            } else {
                account.balance += items.amount;
                console.log("Cash deposited successfully.");
            }


        } else if (items.type === "withdraw") {

            if (items.amount <= 0) {
                console.log("Error: Invalid withdrawal amount.");
            } else if (items.amount > account.balance) {
                console.log("Error: Insufficient balance.");
            } else {
                account.balance -= items.amount;
                console.log("Cash withdrawn successfully.");
            }


        } else if (items.type === "checkBalance") {

            if (account.pin === items.pin) {
                console.log("Checking balance...");
                console.log(`balance is ${account.balance}`);
            } else {
                console.log("Incorrect PIN. Please enter the Correct PIN");
            }


        } else {
            console.log("Error: Invalid transaction type.");
        }



        // BALANCE AFTER TRANSCATION
        if (items.type !== "checkBalance") {
            console.log("Balance after transaction:", account.balance);
        }
        console.log("----------------------------");

    }
};

processTransactions(transaction);





// OUTPUT:
Transcation: deposit |  Amount: 3000
Balance before transaction: 120000
Cash deposited successfully.
Balance after transaction: 123000
----------------------------
Transcation: withdraw |  Amount: 10000
Error: Wrong PIN. Please try again.
----------------------------
Transcation: checkBalance
Balance before transaction: 123000
Checking balance...
balance is 123000
----------------------------
