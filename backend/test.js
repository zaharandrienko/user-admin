

function getMount(num) {



    if(num === 1){
        return  "Junaury";
    } else if(num === 2){
        return "Febuary";
    }
////
//

    else{
        throw new Error("Invalid mount number " + num);
    }

    // switch (num) {

    //     case 1:
    //         return "Junaury";
    //         break;

    //     case 2:
    //         return "Feburay";
    //         break


    //         default:


    // }


}


try {
    getMount(1);
//
///
//console.log("finnlay")
} catch(e){

    ///
    console.log("vaheeeeeeee" + e.message);
    // console.log(e);
} finally {
 
    
    console.log("finnaly");
}
