export const SINGLE_DIGIT = [
  'សូន្យ',
  'មួយ',
  'ពីរ',
  'បី',
  'បួន',
  'ប្រាំ',
  'ប្រាំមួយ',
  'ប្រាំពីរ',
  'ប្រាំបី',
  'ប្រាំបួន'
]
const DOUBLE_DIGIT = [
  '',
  'ដប់',
  'ម្ភៃ',
  'សាមសិប',
  'សែសិប',
  'ហាសិប',
  'ហុកសិប',
  'ចិតសិប',
  'ប៉ែតសិប',
  'កៅសិប'
]

const WORDS = {
  HUNDRED: 'រយ',
  THOUSAND: 'ពាន់',
  HUNDRED_THOUSAND: 'រយពាន់',
  MILLION: 'លាន',
  HUN_MILLION: 'រយលាន'
}

const TEN = 10
const ONE_HUNDRED = 100
const ONE_THOUSAND = 1000
const TEN_THOUSAND = 10_000
const ONE_HUNDRED_THOUSAND = 100_000
const ONE_MILLION = 1000_000
const ONE_BILLION = 1000_000_000

export function integerToWord(num: number, separator: string): string {
  let word = ''
  let remainder = 0

  if (num < TEN) {
    word = SINGLE_DIGIT[num]
  } else if (num < ONE_HUNDRED) {
    remainder = num % TEN
    word = DOUBLE_DIGIT[Math.floor(num / TEN)]
  } else if (num < ONE_THOUSAND) {
    remainder = num % ONE_HUNDRED
    word = SINGLE_DIGIT[Math.floor(num / ONE_HUNDRED)] + WORDS.HUNDRED
  } else if (num < TEN_THOUSAND) {
    remainder = num % ONE_THOUSAND
    word = SINGLE_DIGIT[Math.floor(num / ONE_THOUSAND)] + WORDS.THOUSAND
  } else if (num < ONE_HUNDRED_THOUSAND) {
    remainder = num % TEN_THOUSAND
    word = DOUBLE_DIGIT[Math.floor(num / TEN_THOUSAND)]
    if (remainder < ONE_THOUSAND) {
      word += WORDS.THOUSAND
    }
  } else if (num < ONE_MILLION) {
    remainder = num % ONE_HUNDRED_THOUSAND
    word = SINGLE_DIGIT[Math.floor(num / ONE_HUNDRED_THOUSAND)]
    if (remainder < ONE_THOUSAND) {
      word += WORDS.HUNDRED_THOUSAND
    } else if (remainder < ONE_HUNDRED_THOUSAND) {
      word += WORDS.HUNDRED
    }
  } else if (num < ONE_BILLION) {
    remainder = num % ONE_MILLION
    word =
      integerToWord(Math.floor(num / ONE_MILLION), separator) + WORDS.MILLION
  } else if (num < 10_000_000_000) {
    remainder = num % ONE_BILLION
    word = DOUBLE_DIGIT[Math.floor(Math.floor(num / ONE_BILLION))]

    if (!remainder) {
      word += WORDS.HUN_MILLION
    } else if (remainder < 100_000_000) {
      word += WORDS.HUNDRED
    }
  }

  if (remainder !== 0) {
    return `${word}${separator}${integerToWord(remainder, separator)}`
  }

  return word
}
