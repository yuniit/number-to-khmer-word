import { SINGLE_DIGIT } from './integerToWord'

export function decimalToWord(num: string, separator: string): string {
  const numArr = num.split('')
  const digitArr = numArr.map((char) => {
    return separator + SINGLE_DIGIT[Number(char)]
  })

  return digitArr.join('')
}
