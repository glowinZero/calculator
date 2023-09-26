let count = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e) =>{
        e.preventDefault()
        if(e.target.innerHTML ==="="){
            count = eval(count);
            document.querySelector('input').value = count;
        } else if(e.target.innerHTML ==="AC"){
            count = "";
            document.querySelector('input').value = count;
        } else if (e.target.innerHTML === "DE") {
            count = count.slice(0, -1); 
            document.querySelector('input').value = count;
        } else {
            count = count + e.target.innerHTML;
            document.querySelector('input').value = count;
        }
    })
})

