
function getUserAuthState(){

    if(localStorage.getItem("userAuth") === "false"){
        return false;
    }else{
        return true;
    }
}

function getUserInfo(){
    
    return JSON.parse(localStorage.getItem("userInfo"));
}



function saveUserAuthState(curState){
    localStorage.setItem("userAuth",curState);
}

function saveUserInfo(userInfo){

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}


function userLoggedOut(){
    localStorage.setItem("userAuth",false);
    localStorage.setItem("userInfo",null);
}


export {saveUserAuthState, saveUserInfo, getUserAuthState, getUserInfo, userLoggedOut};
