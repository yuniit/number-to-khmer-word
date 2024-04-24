import { currencyToWord } from '../src/currencyToWord'

// Test decimal
console.log(currencyToWord(1, { currency: 'USD', showSymbol: true }))
console.log(currencyToWord(11, { currency: 'USD' }))
console.log(currencyToWord(9, { currency: 'USD' }))
console.log(currencyToWord(0.5, { currency: 'USD' }))
console.log(currencyToWord(0.501, { currency: 'USD' }))
console.log(currencyToWord(1.99, { currency: 'USD' }))
console.log(currencyToWord(100_231.15, { currency: 'USD' }))
console.log(currencyToWord(1230, { currency: 'USD' }))

// console.log(currencyToWord(150_200, 'KHR'));
// console.log(currencyToWord(2100, 'KHR'));
// console.log(currencyToWord(1_000_200, 'KHR'));
// console.log(currencyToWord(100.02, 'KHR'));
