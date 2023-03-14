const fullName = document.querySelector('.name')
const email = document.querySelector('.email')
const interest = document.querySelector('.interest')
const submit = document.querySelector('.submit-form')

submit.addEventListener('click', ()=> {
    if (fullName.value == '' || email.value == '' || interest.value == '') {
        alert('Fill your data correctly')
    } else if (fullName.value.length < 5) {
        alert('Enter a name of atleast 5 letters')
    } else if(email.value.indexOf('@gmail.com') == -1){
        alert('Enter the correct Email format')
    } else {
        alert('Your data has succesfully saved and send')
    }
})