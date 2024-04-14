const choices1 = document.querySelectorAll('.q1')
const choices2 = document.querySelectorAll('.q2')
const choices3 = document.querySelectorAll('.q3')


choices1.forEach((answer) => {
    const pick = document.createElement('input')
    pick.type = 'radio'
    pick.name = 'question1'
    answer.appendChild(pick) })

choices2.forEach((answer) => {
    const pick = document.createElement('input')
    pick.type = 'radio'
    pick.name = 'question2'
    pick.onclick = "textShow()"
    answer.appendChild(pick) })

choices3.forEach((answer) => {
    const pick = document.createElement('input')
    pick.type = 'radio'
    pick.name = 'question3'
    pick.onclick = "textShow()"
    answer.appendChild(pick) })


const radClick = document.querySelectorAll('input[type="radio"]')

radClick.forEach(function(radio) {
    radio.addEventListener('change', function() {
        const span = this.parentNode.querySelector('.hide')
        if (span) { 
            if (this.checked) {
                span.classList.toggle('show');
            } else if (!this.checked) {
                span.classList.toggle('hide') 
            }
        }
    })
})

