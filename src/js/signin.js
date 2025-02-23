const signin = document.forms.signin;


signin.onsubmit = (e) => {
    e.preventDefault();

    const user = {
        email:"",
        password:""
    };

    const fm = new FormData(signin);

    fm.forEach((val, key) => {
        user[key] = val;
    } )
    console.log(user);
    
}
