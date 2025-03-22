let loginuser = localStorage.getItem("loginuser") ? JSON.parse(localStorage.getItem("loginuser")) : []
let registeruser=localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []


if (!loginuser) {
    window.location.href = 'product.html';

}
