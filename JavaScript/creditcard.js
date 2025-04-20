function validateCreditCard(cardNumber) {
    const cleanCardNumber = cardNumber.replace(/-/g, '');

    if (cleanCardNumber.length !== 16 || !/^\d+$/.test(cleanCardNumber)) {
        return { valid: false, number: cardNumber, error: 'wrong_length' };
    }

    if (new Set(cleanCardNumber).size === 1) {
        return { valid: false, number: cardNumber, error: 'only_one_type_of_number' };
    }

    if (parseInt(cleanCardNumber[cleanCardNumber.length - 1]) % 2 !== 0) {
        return { valid: false, number: cardNumber, error: 'odd_final_number' };
    }

    const sum = cleanCardNumber.split('').reduce((total, num) => total + parseInt(num), 0);
    if (sum <= 16) {
        return { valid: false, number: cardNumber, error: 'sum_less_than_16' };
    }

    return { valid: true, number: cardNumber };
}

function promptForCardNumber() {
    const cardNumber = prompt("Please enter your credit card number (e.g., 9999-9999-8888-0000):");

    const validationResult = validateCreditCard(cardNumber);

    if (validationResult.valid) {
        alert(`The card number ${validationResult.number} is valid.`);
    } else {
        alert(`The card number ${validationResult.number} is invalid. Error: ${validationResult.error}`);
    }
}

promptForCardNumber();
