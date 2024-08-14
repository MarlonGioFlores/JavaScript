let paymentMethod = 'cash'

switch (paymentMethod){
    case 'cash':
        console.log('You payed with cash')
        break
    case 'credit card':
        console.log('you payed with credit card')
    case 'cacao':
    console.log('you payed with cacao')
    break
    default:
        console.log('Invalid payment method')
}