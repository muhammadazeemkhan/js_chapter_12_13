function question_1(){
    var alphabet = prompt("enter something");
    alert(typeof(alphabet))
}


function question_2(){
    var num1 = parseInt(prompt("Enter 1st Number"));
    var num2 = parseInt(prompt("Enter 2nd Number"));

    if(num1>num2){
        alert(num1 + ">" + num2)
    }else if(num1<num2){
        alert(num2 + ">" + num1)
    }else if(num1 = num2){
        alert(num1 + "=" + num2)
    }

}



function question_3(){
    var num = parseInt(prompt("Enter Number"));

    if(num>0){
        alert("Number is positive")
    }else if(num<0){
        alert("Number is negative")
    }else{
        alert("Number is zero")
    }

}

function question_4(){
    var vowel = prompt("Enter alphabet");
    if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
        alert("You have enter a vowel")
    }else{
        alert("False")
    }
}


function question_5(){
    var correctPassword = "12345";
    var userPassword = prompt("Enter Password");
    if(userPassword === ''){
        alert("Please Enter your Password")
    }else if(userPassword === correctPassword){
        alert("Correct!")
    }else if(userPassword!== correctPassword){
        alert("Incorrect Password")
    }
}

function question_6(){
    var greeting;
    var hour = 13;
    if (hour < 18) {
    greeting = "Good day";
    }else{

        greeting = "Good evening";
    }
    alert(greeting)
    }


    function question_7(){
        var time = +prompt("Enter time in 24 hr format");
        if(time>=0 &&time<12){
            alert("Good Morning")
        }else if(time >= 12 && time <17){
            alert("Good Afternoon")
        }else if(time>=17 && time <21){
            alert("Good Evening")
        }else if(time >= 21 && time <24){
            alert("Good Night")
        }
    }