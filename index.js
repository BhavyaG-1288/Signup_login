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