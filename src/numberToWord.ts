import { decimalToWord } from './helpers/decimalToWord'
import { integerToWord } from './helpers/integerToWord'

const decimalSymbol = {
  decimalPoint: 'ចុច',
  decimalComma: 'ក្បៀស'
}

export function numberToWord(
  input: number | string,
  separator: string = ' '
): string {
  const num = Number(input)

  if (isNaN(num)) {
    throw Error('The number format is invalid')
  }

  if (Number.isInteger(num)) {
    return integerToWord(num, separator)
  } else {
    return handleDecimal(input.toString(), separator)
  }
}

function handleDecimal(input: string, separator: string): string {
  const [integer, decimal] = input.split('.')
  const integerPart = integerToWord(Number(integer), separator)
  const decimalPart = decimalToWord(decimal, separator)
  return `${integerPart}${separator}${decimalSymbol.decimalComma}${separator}${decimalPart}`
}
