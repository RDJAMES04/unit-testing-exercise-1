export default function fizzbuzz(number) {
  switch (true) {
  case number < 0 || !Number.isInteger(number):
    return 'is not positive integer'
  case number % 3 === 0 && number % 5 === 0:
    return 'fizzbuzz'
  case number % 3 === 0:
    return 'fizz'
  case number % 5 === 0:
    return 'buzz'
  default:
    return ''
  }
}
