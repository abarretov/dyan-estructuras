// returns a random number (including zero)
function getRandomNumberZero(max) {
  let num = Math.floor(Math.random() * max)
  return num
}

// returns a random number (excluding zero)
// function getRandomNumberUpperZero(max, start) {
//   let num = Math.floor(Math.random() * max) + start
//   return num
// }

// returns a random number between min and max (including max)
// function getRandomNumberBetweenMinMaxInclude(min, max) {  
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// returns a random number between min and max (excluding max)
// function getRandomNumberBetweenMinMaxExclude(min, max) {  
//   return Math.floor(Math.random() * (max - min) + min)
// }
