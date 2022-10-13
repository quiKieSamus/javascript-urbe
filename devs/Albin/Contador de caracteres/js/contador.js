document.addEventListener("DOMContentLoaded", o =>{
    contadorLetra()
})

const contadorLetra = () => {
    const $input = document.getElementById("input")
    
    const $number = document.getElementById("number")

    $input.addEventListener("input", e =>{
        $number.value = e.target.value.length
     
    })
}