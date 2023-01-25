function createAccount(pin, amount) {
    let currentBalance = amount || 0;
    let currentPin = pin;
    let account = {
        checkBalance: function checkBalance(PIN) {
            if (PIN !== currentPin) {
                return "Invalid PIN.";
            }
            return `$${currentBalance}`;
        },

        deposit: function deposit(PIN, depositAmount) {
            if (PIN !== currentPin) {
                return "Invalid PIN.";
            }
            currentBalance += depositAmount;
            return `Successfully deposited $${depositAmount}. Current balance: $${currentBalance}.`;
        },

        withdraw: function withdraw(PIN, withdrawAmount) {
            if (PIN !== currentPin) {
                return "Invalid PIN.";
            }
            if (withdrawAmount > currentBalance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled."
            }
            currentBalance -= withdrawAmount;
            return `Successfully withdrew $${withdrawAmount}. Current balance: $${currentBalance}.`
        },

        changePin: function changePin(PIN, newPIN) {
            if (PIN !== currentPin) {
                return "Invalid PIN.";
            }
            currentPin = newPIN;
            return "PIN successfully changed!"
        }
    }
    return account;
}

module.exports = { createAccount };

/**
 * Problem: function should return an object "bank account" with four methods:
 * checkBalance:
 *      ---if PIN is correct, return current balance
 *      ---if PIN invalid, return "Invalid PIN"
 * 
 * 
 * deposit:
 *      ---if PIN is correct AND we have a deposit amount, add the deposit to the current balance and return "Successfully deposited $x. Current balance: $x"
 *      ---if PIN invalid, return "Invalid PIN"
 * 
 * 
 * withdraw:
 *      ---if PIN is correct AND we have a withdrawal amount, subtract that amount from the current balance and return "Successfully withdrew $x. Current balance: $x"
 *      ---cannot withdraw more than current balance; if attempted, return "Withdrawal amount exceeds account balance. Transaction cancelled."
 *      ---if PIN invalid, return "Invalid PIN"
 * 
 * 
 * changePIN:
 *      ---if PIN is correct AND we have a new PIN, change PIN to new PIN. Return "PIN successfully changed!"
 *      ---if PIN invalid, return "Invalid PIN"
 * 
 */