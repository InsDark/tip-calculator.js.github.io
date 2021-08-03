let allApp = document.querySelector('.app')
let getBill = document.querySelector('.billGetter')
let getPerson = document.querySelector('.peopleGetter')
let getService = document.querySelector('.getService')
let tipForm = document.querySelector('#tipCalculator')

let percentService = [0.2, 0.1, 0.02]
let resultTip = document.querySelector('.tipAmount')

tipForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let bill = parseInt(getBill.value)
  let people = parseInt(getPerson.value)
  let collection = getService.selectedOptions[0].value - 1
  if (collection <= -1){
    alert('Please select a service')
  } else{
    let tipAmount = Math.floor(bill * percentService[collection])
    let totalAmount = Math.floor(tipAmount + bill)
    let eachOwes = Math.floor(totalAmount / people)

    resultTip.style.display = 'block'
    resultTip.children[0].textContent = `Tip Amount: $ ${tipAmount}.00`
    resultTip.children[1].textContent = `Total Amount: $ ${totalAmount}.00`
    resultTip.children[2].textContent = `Each Person Owes: $ ${eachOwes}.00`
  }
})
