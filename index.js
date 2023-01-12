// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
//Note: String will have at least one element; words will always be separated by a space. 
//example: "apple ban" => ["apple 5", "ban 3"]

//P: given a string, always have atleast 1 word and words are separated by a space
//R: return a array, with the length concatenated onto each string

//E
function separated(str) {
  //split string by spaces => array
  //define an array to hold the return value
  //for loop
  //find the length and concat(to bring together) into a string and push into return array
  //return array
  let myArray = str.split(" ")
  //myArray = ['apple', 'ban']
  let returnArr = []
  //myArray = ["apple", "ban"]
  //myArray[0] = 'apple'
  //myApple[0].length = 5
  for (let i = 0; i < myArray.length; i++) {
    returnArr.push(`${myArray[i]} ${myArray[i].length}`)
  }
  //what makes up a for loop:
  //starting condition
  //end condition
  //increment


  return returnArr;
}

console.log(separated("apple ban"), ["apple 5", "ban 3"])

//given a string, sep. by spaces
//return a array, with the length concat. onto each string

function separated2(str){
  return str.split(' ').map(val => {
    val = `${val} ${val.length}`
    return val
  })
}

console.log(separated2('apple ban'), ['apple 5', 'ban 3'])