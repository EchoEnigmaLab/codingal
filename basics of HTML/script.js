function validate(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox= document.getElementById('message');

    let message = '';

    if(email===''){
        message = ' enter your email';
        msgBox.style.color='red';
    } else if (pass===''){
        message = ' enter your password';
        msgBox.style.color = 'red';
    } else if (age === ''){
        message='Please enter your age';
        msgBox.style.color = 'red';
    } else{
        message = "login suucessfull"
        msgBox.style.color = 'green';
    }

    msgBox.innerText= message;

}