let num = document.getElementById('number')
let add = document.getElementById('increment')
let sub = document.getElementById('decrement')
let count = 0

//add funtion
add.onclick = function() {
    count++
    num.innerHTML = count
}

//sub function 
sub.onclick = function() {
    count--
    num.innerHTML = count
}






