
let count =0;
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");

function increaseCounter() {
  count ++;
 document.getElementById('count').innerHTML =count
 };

 function decreaseCounter() {
  count--;
 document.getElementById('count').innerHTML =count
 };
decreaseBtn.addEventListener("click",()=> {
  decreaseCounter()

});
increaseBtn.addEventListener('click', () => {
 displayCounter() 
})


/*let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
   sum = sum + 5;
   
}

// Only change code above this line

addThree();
addFive();*/

