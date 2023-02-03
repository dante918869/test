const slideInput = document.querySelector(".range")
const payment = document.querySelector(".payment")

slideInput.addEventListener("input", ()=>{
    payment.textContent = slideInput.value
})

const btn = document.querySelector(".switch")
btn.addEventListener("click",()=>{
    btn.classList.toggle("switch-active")
})