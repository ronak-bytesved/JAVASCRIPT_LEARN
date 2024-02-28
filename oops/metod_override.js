class employee{
    login(){
        console.log("employee is login");
    }
    loggedout(){
        console.log('employee is logged out');
    }
    requestforleave(x){
        console.log(`request for leaves ${x}`);
    }
}

class ronak extends employee{
    leave(x){
        super.requestforleave();
        console.log(`we grant for extra leave ${x}`);
    }
}

// let ronakemp = new employee();
let ronakemp = new ronak();
ronakemp.login();
ronakemp.leave(5);
// ronakemp.requestforleave(5);
