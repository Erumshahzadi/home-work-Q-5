// Question5:Write a program that greet the user based on time of day. Display "Good Morning","Good Afternoon" or "Good Evening" based on the time of day when you run the code
const timeOfDay: number = new Date().getHours();

if(timeOfDay >= 5 && timeOfDay < 12){
    console.log("Good Morning");
}
else if(timeOfDay >= 12 && timeOfDay < 18){
    console.log("Good Afternoon");
}
else if(timeOfDay > 17 && timeOfDay < 21){
    console.log("Good Evening");
}
else{
    console.log("Good Night");
}