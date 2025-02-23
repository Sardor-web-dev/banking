const signup = document.forms.signup;

signup.onsubmit = (e) => {
    e.preventDefault();


    const user = {
        email: "",
        name: "",
        surname:"",
        password:"",
    }

    const fm = new FormData(signup);

    fm.forEach((val, key) => {
        user[key] = val;
    })

    console.log(user);
   
}