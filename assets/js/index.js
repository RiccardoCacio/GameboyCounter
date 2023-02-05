
window.onload = function () {

    var myrisultato = document.getElementById('result');
    var container = document.getElementById('container');    
    var counter = 0;
    
    //buttonPiu
    var mybuttonpiu = document.createElement('button')
    mybuttonpiu.textContent='+'
    container.appendChild(mybuttonpiu);
    mybuttonpiu.setAttribute('id','buttonPlus')

    //buttonMeno
    var mybuttonmeno = document.createElement('button')
    mybuttonmeno.textContent='-'
    container.appendChild(mybuttonmeno);
    mybuttonmeno.setAttribute('id','buttonLess')

     //buttonReset
    var mybuttonreset = document.createElement('button')
    mybuttonreset.textContent='Reset'
    container.appendChild(mybuttonreset);
    mybuttonreset.setAttribute('id','buttonReset')

    //buttonReset
    var myrisultato = document.createElement('p')
    myrisultato.textContent='0'
    container.appendChild(myrisultato);
    myrisultato.setAttribute('id','result')

    //counter

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
