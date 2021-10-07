function validate() {
    let email = document.getElementById('email');
    let pattern = /^[a-z]+@[a-z]+.[a-z]+$/gm;
    email.addEventListener('change', () => {
        if(!pattern.test(email.value)) {
            email.classList.add('error');
        }
        else{
            email.removeAttribute('class');
        }
    });
    
}