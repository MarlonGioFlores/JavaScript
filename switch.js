let paymentMethod = 'cash'

switch (paymentMethod){
    case 'cash':
        console.log('Your pay with cash')
        break
    case 'credit card':
        console.log('you pay with credit card')
    case 'cacao':
    console.log('you pay with cacao')
    break
    default:
        console.log('Invalid payment method')
}