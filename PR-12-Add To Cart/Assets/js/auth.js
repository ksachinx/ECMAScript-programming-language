let rusers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];


const useregister = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmPassword').value;
    let user = {
        name: name,
        email: email,
        password: password,
        confirmpassword: confirmpassword
    }

    if (!name.match(/^[a-zA-Z ]{2,50}$/)) {
        alert("enter valid name min :-2 & max:-50");
        document.getElementById('name').value = "";
        return false;
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
        alert("enter valid email ex:-name num @gmail.com");
        document.getElementById('email').value = "";
        return false;
    } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,128}$/)) {
        alert(" At least one uppercase letter, one lowercase letter, one number, and one special character");
        document.getElementById('password').value = "";
        return false;
    } else if (password != confirmpassword) {
        alert("password not match");
        document.getElementById('confirmPassword').value = "";
        return false;
    } else {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('confirmPassword').value = "";
    }

    let dup = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []

    if (dup.find((val) => val.email == email && val.password == password && val.name == name)) {
        alert("user already exist");
        return false;
    }
    rusers.push(user);
    localStorage.setItem("users", JSON.stringify(rusers));
    alert("user register successfully");
    window.location.href = 'login.html';
}



const userlogin = () => {
    window.location.href = 'login.html';
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let login = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []

    let loginuser = login.find((val) => {
        return val.email == email && val.password == password
    })

    if (loginuser) {
        alert("login successfully");
        window.location.href = 'product.html';
        localStorage.setItem("loginuser", JSON.stringify(loginuser));
        if(check<=0){
       
            document.getElementById("login").style.visibility = "hidden";
            document.getElementById("logout").style.visibility = "visible";
    
          }
    } else {
        alert("invalid email or password");
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        
    }

}
const logout = () => {
    localStorage.removeItem("loginuser");
   
}













