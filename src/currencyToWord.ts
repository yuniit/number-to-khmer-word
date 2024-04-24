import { integerToWord } from './helpers/integerToWord'
import { numberToWord } from './numberToWord'

const AndWord = 'និង'
const SharpWord = 'គត់'
const CentWord = 'សេន'

type Currency = keyof typeof currencyCountry
type Opts = {
  currency: Currency
  showSymbol?: boolean
  separator?: string
}

const currencyCountry = {
  USD: {
    symbol: '$',
    name: 'ដុល្លារ'
  },
  KHR: {
    symbol: '៛',
    name: 'រៀល'
  }
}

export function currencyToWord(input: number | string, opts: Opts): string {
  const num = Number(input)
  const separator = typeof opts.separator == 'string' ? opts.separator : ' '

  if (isNaN(num)) {
    throw Error('The number format is invalid')
  }

  const { symbol, name } = currencyCountry[opts.currency]
  let result = ''

  if (Number.isInteger(num)) {
    result = handleInteger(input.toString(), name, separator)
  } else {
    result = handleDecimal(input.toString(), name, separator)
  }

  return `${opts.showSymbol ? `${symbol} ` : ``}${result}`
}

function handleInteger(
  input: string,
  currencyName: string,
  separator: string
): string {
  const num = Number(input)
  const integerPart = integerToWord(num, separator)

  const result = integerPart + ` ${currencyName} ` + SharpWord

  return result
}

function handleDecimal(
  input: string,
  currencyName: string,
  separator: string
): string {
  let [integer, decimal] = input.split('.')
  const integerPart = integerToWord(Number(integer), separator)

  if (decimal.length <= 2) {
    // handle 0.5 => 0.50, retain 0
    // fifty instead of five CentWord
    if (decimal.length === 1) {
      decimal = decimal + '0'
    }
    const decimalPart = integerToWord(Number(decimal), separator)

    const result =
      integerPart +
      ` ${currencyName}` +
      ` ${AndWord}` +
      ` ${decimalPart} ` +
      CentWord

    return result
  } else {
    const num = numberToWord(Number(input), separator)
    return `${num} ${currencyName}`
  }
}
