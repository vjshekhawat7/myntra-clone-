function register() {
    var forName = document.getElementById("name");
    if (forName) {
        var name1 = forName.value;
        console.log(name1)
    }
    var forEmail = document.getElementById("email");
    if (forEmail) {
        var email1 = forEmail.value;
        console.log(email1)
    }
    var forPassword = document.getElementById("password");
    if (forPassword) {
        var password1 = forPassword.value;
        console.log(password1)
    }
    if (name1 && email1 && password1) {

        localStorage.setItem("userdata", JSON.stringify({ nameOfUser: name1, emailOfUser: email1, passwordOfUser: password1 }));
        localStorage.setItem("Is User Log-in", "false");
        alert("Registration done");
        window.location.href = "./login.html"

    } else {
        alert("Error:- Fill all Data")
    }
}
function login() {
    var forEmail = document.getElementById("email2");
    if (forEmail) {
        var userEmail = forEmail.value;
        console.log(userEmail)
    }
    var forPassword = document.getElementById("password2");
    if (forPassword) {
        var userPassword = forPassword.value;
        console.log(userPassword);
    }
    if (forEmail && forPassword) {
        var dataFromLocal = localStorage.getItem("userdata");
        var parsedata = JSON.parse(dataFromLocal);
        console.log(parsedata.emailOfUser, "parsedata.emailOfUser");
        if (userEmail == parsedata.emailOfUser && userPassword == parsedata.passwordOfUser) {
            localStorage.setItem("Is User Log-in", "true");
            alert("login successful");
            window.location.href = "./homepage.html";
        } else {
            alert("Enter Correct Data")
        }

    } else {
        alert("Enter Correct data")
    }


}
function addToCart(ProId){
    alert("Adding To Cart");
    console.log(ProId);
    var existingProduct=JSON.parse(localStorage.getItem("allProducts"));
    console.log( existingProduct)
    if( existingProduct==null){ existingProduct=[]}

    var ProImg=ProId.querySelector("img").src
    console.log(ProImg)
    
    var ProPS=ProId.querySelectorAll("p");
    var proName=ProPS[0].innerText;
    console.log(proName)
    var ProPrice=ProPS[2].innerText;
    console.log(ProPrice)
    var proObj={pI:ProImg,pN:proName,pP:ProPrice};
    console.log(proObj);
    existingProduct.push(proObj);
    localStorage.setItem("allProducts", JSON.stringify(existingProduct));
    alert("Product Added")
}
