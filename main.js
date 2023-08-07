
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
  increaseCounter() 
})


