let userNames =["Bhavya","Bhanu","Lavanya","Alekya","chandu"];
function signup(str){
    let filetredData = userNames.filter((el,i)=> el==str);
    if(filetredData.length==0){
        userNames.push(str)
        console.log("Signup Sucessfull......")
    }else{
        console.log("Already Registred......")
    }
}
signup("Veekshitha")
signup("Bhanu")

function login(str,password){
    let filetredData = userNames.filter((el,i)=> el ==str);
    if (filetredData.length ==0) {
        console.log("User Not Found....Please Signup");
    }else {
        if(password == "Emp@123") {
            console.log("Login Sucessfull.......");
        }else {
            console.log("Wrong Password......");
        }
    }
}
login("Bhavya","Emp@123");