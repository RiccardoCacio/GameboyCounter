
window.onload = function () {

    var mybuttonpiu = document.getElementById('buttonPlus');
    var mybuttonmeno = document.getElementById('buttonLess');
    var mybuttonreset = document.getElementById('buttonReset');
    var myrisultato = document.getElementById('result');

    var counter = 0;

    mybuttonpiu.addEventListener("click", () => {
        counter++
        myrisultato.innerHTML = counter;
        console.log(counter)
    })

    mybuttonmeno.addEventListener("click", () => {
        counter--
        myrisultato.innerHTML = counter;
        console.log(counter)
    })

    mybuttonreset.addEventListener("click", () => {
        counter = (counter - counter)
        myrisultato.innerHTML = counter;
        console.log(counter)
    })

}
