
function troisHeureDix(a) {
   if(a.length === 5) console.log(a.slice(2,5))
   else if(a.length === 4) console.log(a.slice(2,4))
}
troisHeureDix("3:10"); 

function foo(b){
 console.log(b.split(":")[1]);
}
foo("3:20")