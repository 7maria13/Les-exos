const { Console } = require("console");

let n = 8
let str = ""
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++ ) {
    if (((i-2 > 0) && (i < n)) && ((j !== 0) && (j !== (i-1)))) {
      str = str + "o";
    }
    else {
      str = str + "x"
    } 
  } 
  // if ((i-2 > 0) && (i < n)) {
  //   for (let k = 0; k < i-2; k++) {
      
  //   }
  // }
  str = str + "\n" 
}
console.log(str);


let m = 10
let srt2 = "" 
for (let i = 0 ; i < m; i++) {
  
  for (let k = 0; k < i ; k++) {
    srt2 = srt2 + " ";
    
  }
  for (let j = 0; j < m - i ; j++){
    srt2 = srt2 + i
  }
  srt2 = srt2 + "\n" 
}
console.log(srt2);
