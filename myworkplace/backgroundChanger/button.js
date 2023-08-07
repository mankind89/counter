let button =document.querySelector('#btn')
let count = 0;

function increaseCount() {
count++;
document.getElementById('counter').innerHTML = count
}
button.addEventListener('click', ()=> {
  increaseCount()
})
