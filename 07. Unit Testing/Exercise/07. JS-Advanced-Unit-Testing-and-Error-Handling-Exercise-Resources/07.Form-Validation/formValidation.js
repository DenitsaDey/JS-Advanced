function validate() {
    const userNamePattern = /^[a-zA-Z0-9]{3,20}$/;
    const passwordPattern = /^\w{5,15}$/;
    const emailPattern = /^.*@.*\..*$/;

    let isValidInput = true;
    let isChecked = false;
    

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();

        const usernameField = document.getElementById('username')
        if(!userNamePattern.test(usernameField.value)){
            isValidInput = false;
            usernameField.style.borderColor = 'red';
        } else{
            usernameField.style.borderColor = 'none';
        }

        const passwordField = document.getElementById('password');
        const cnfrmPasswordField = document.getElementById('confirm-password');
        if(!passwordPattern.test(passwordField.value)){
            isValidInput = false;
            passwordField.style.borderColor = 'red';
        } else{
            passwordField.style.borderColor = 'none';
        }
        if(passwordField.value !== cnfrmPasswordField.value){
            isValidInput = false;
            passwordField.style.borderColor = 'red';
            cnfrmPasswordField.style.borderColor = 'red';
        }else{
            cnfrmPasswordField.style.borderColor = 'none';
        }

        const emailField = document.getElementById('email');
        if(!emailPattern.test(emailField.value)){
            isValidInput = false;
            emailField.style.borderColor = 'red';
        }else{
            emailField.style.borderColor = 'none';
        }

        const validDiv = document.getElementById('valid');
        if(isValidInput){
            validDiv.style.display = 'block';
        } else{
            validDiv.style.display = 'none'
        }

        if(isChecked){
            const companyNo = document.getElementById('companyNumber');
            if(isNaN(Number(companyNo.value)) || Number(companyNo.value) < 1000 || Number(companyNo.value) > 9999){
                companyNo.style.borderColor = 'red';
            } else{
                companyNo.style.borderColor = 'none';
            }
        }
    })
    document.getElementById('company').addEventListener('change', (e) => {
        const companyField = document.getElementById('companyInfo');
        if(e.target.checked){
            isChecked = true;
            companyField.style.display = 'block';
        } else{
            isChecked = false;
            companyField.style.display = 'none';
        }
    })
}
