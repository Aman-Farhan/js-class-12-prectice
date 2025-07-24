// let userinput = prompt("enter ypur information");
// for (let i = 0 ; i < userinput.length ; i++){
//     if (userinput === "  " && userinput === i+1 ){
//     console.log( )
// }
// }



// let userInput = prompt("enter ypur information");
// for (let i = 0 ; i < userInput.length ; i++){
//     let char = userInput.slice(i,i + 2);
//     if (char === "  ");{
//         console.log("please correct your information it has double spaces!");
//     }
// }


// let dummyText = "a quick World War II brown fox jump over the lazy dog.a quick World War II brown fox jump over the lazy dog.a quick World War II brown fox jump over the lazy dog."



let discountedMonth = ["jan","feb","mar","apr","may","jun","july"];
let userBirthMonth = prompt("Enter Your Month");

userBirthMonth = userBirthMonth.toLowerCase();
userBirthMonth = userBirthMonth.slice(0,3);

let BirthMonth = false ;
let p = document.getElementById("text")

for (i = 0 ; i < discountedMonth.length; i++){
    if(userBirthMonth === discountedMonth[i]){
        BirthMonth = true;
    }
}

if(BirthMonth){
    p.innerHTML = "congrates! you are the eligiable for thi discount";
} else{
    p.innerHTML = "sorry sir you are not eligiable for this discount";
}



