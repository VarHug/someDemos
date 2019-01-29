let num: number
let str: string
let bool: boolean

num = 123
num = 123.456
// num = '123' Error

str = '123'
// str = 123  Error

bool = true
bool = false

let boolArray: boolean[]
boolArray = [true, false]

interface User {
  name: string
  age: number
}

let sam: User = {
  name: 'Sam',
  age: 18
}

let numArray: number[] = [1, 2]
let reversedNums = numArray.reverse()

let nameNumber: [string, number]
nameNumber = ['Jenny', 123456]
const [name2, num2] = nameNumber
