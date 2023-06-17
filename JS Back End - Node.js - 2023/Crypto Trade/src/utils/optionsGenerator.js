exports.optionsGenerator = (payment) => {

    let options = ['PayPal', 'Crypto Wallet', 'Credit Card', 'Debit Card']

    options = options.map((option) => {
        selected = payment === option;

        return {
            option: option,
            selected: selected
        }
    })

    return options
}