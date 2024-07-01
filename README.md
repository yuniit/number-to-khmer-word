<h2 align="center">Number to Khmer words</h2>

<p align="center">
    <a href="https://vh13294.github.io/number-to-khmer-word/">
        Try it!
    </a>
</p>


# Description

Javascript and Typescript library for converting Arabic numerals to Khmer words

# Installation

```bash
npm i @yuniit/number-2-khmer-word
```

# Basic Usage

### Include Module

```ts
import { numberToWord } from '@yuniit/number-2-khmer-word';

const words = numberToWord(input: number | string)

// Example
numberToWord(100_000)
numberToWord('1000')
```

For Currency Mode

CurrencyType = ['USD', 'KHR']

```ts
import { currencyToWord } from '@yuniit/number-2-khmer-word';

const words = currencyToWord(input: number | string, currency: currencyType)

// Example
currencyToWord(100_000, 'USD')
currencyToWord('1000', 'KHR')
```

### TODO

- [ ] Allow copy paste but show error toast if invalid number (insert in series)
- [ ] Animate text change
