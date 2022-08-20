class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError";
    }
}

const requestTransfer = (account, custName, amount) => {
    if(account.length < 10) { // validate minimum length of account
        throw new ValidationError('Invalid Account');
    } else if(typeof(custName) !== "string") { //check the type of customer name
        throw new ValidationError('Invalid Name Format');
    } else if(amount < 10000) { // minimum amount transfer is 10000
        throw new ValidationError('Amount Exceed Minimum of Limit');
    }
};

const orderCustomer = (account, custName, amount, recipientName, transferType) => {
    let adminFee = 0;

    try {
        requestTransfer(account, custName, amount);
    } 
    
    catch(error) {
        return error.message;
    }

    if(transferType === "overbooking") {
        adminFee += 0;
    } else if(transferType === "online") {
        adminFee += 6500;
    } else if(transferType === "bifast") {
        adminFee += 1900;
    }
    
    return `
    Account: ${account},\n 
    Name: ${custName},\n 
    Amount: ${amount},\n 
    Recipient Name: ${recipientName},\n
    Transfer Type: ${transferType},\n
    Admin Fee: ${adminFee},\n`;
}

console.log(orderCustomer(0123456712, "Robby Kamil", 9999, "Udin", "bifast"));
/*
* Output:
* Amount Exceed Minimum of Limit
*/
