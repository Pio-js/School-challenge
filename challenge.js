let age = parseInt(prompt('How old are you?'));
let day = prompt('Which day do you want to check?').toLowerCase();
let time = parseInt(prompt('What time do you want to check?'));


let longWeek;
let shortWeek;
let weekend;


if(day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday'){
    shortWeek = day;
}else if(day == 'saturday' || day == 'sunday'){
    weekend = day;
}else if(day == 'friday'){
    longWeek = day;
}else{
    alert(day + ' is not a day!');
}


let ageOne;
let ageTwo;
let ageThree;
let ageFour;
let ageFive;


if(age > 0 && age < 3){
    ageOne = age;
}else if(age >= 3 && age < 6){
    ageTwo = age;
}else if(age >= 6 && age < 12){
    ageThree = age;
}else if(age >= 12 && age < 18){
    ageFour = age;
}else if(age >= 18){
    ageFive=age;
}else{
    alert(age + ' is not an age!');
}


let timeOne;
let timeTwo;
let timeThree;

if(time >= 9 && time < 13){
    timeOne = time;
}else if(time >= 13 && time <= 15){
    timeTwo = time;
}else if(time > 15 && time <= 16){
    timeThree = time;
}else{
    alert(time + ' is not a time!')
}

let msgOne = `Your ${age} years old child will be on ${shortWeek} at ${timeOne} o'clock at Kindergarten`;
let msgTwo = `Your ${age} years old child will be on ${shortWeek || longWeek} at ${timeOne} o'clock at Kindergarten`;
let msgThree = `Your ${age} years old child will be on ${shortWeek || longWeek} at ${timeOne || timeTwo} o'clock at primary school`;
let msgFour = `Your ${age} years old child will be on ${shortWeek || longWeek} at ${timeOne || timeTwo} o'clock at secondary school`;
let msgFive = `You, ${age} years old, will work on ${shortWeek || longWeek} at ${timeOne || timeTwo || timeThree} o'clock at primary school`;
let msgSix = `On ${day} at ${time} o'clock you will be at home`;

switch (day) {
    case shortWeek:
        if(ageOne&&timeOne){ 
            alert(msgOne);
            break;
        }
        if(ageTwo&&timeOne){
            alert(msgTwo);
            break;
        }
        if(ageThree&&timeOne){
            alert(msgThree);
            break;
        }
        if(ageFour&&timeOne){
            alert(msgFour);
            break;
        }
        if(ageFive&&timeOne){
            alert(msgFive);
            break;
        }
        if(ageFour&&timeTwo){
            alert(msgFour);
            break;
        }
        if(ageFive&&timeTwo){
            alert(msgFive);
            break;
        }
        if(ageFive&&timeThree){
            alert(msgFive);
            break;
        }else{
            alert(msgSix);
            break;
        }
    case longWeek:
        if(ageTwo&&timeOne){
            alert(msgTwo);
            break;
        }
        if(ageThree&&timeOne){
            alert(msgThree);
            break;
        }
        if(ageFour&&timeOne){
            alert(msgFour);
            break;
        }
        if(ageFive&&timeOne){
            alert(msgFive);
            break;
        }
        if(ageFour&&timeTwo){
            alert(msgFour);
            break;
        }
        if(ageFive&&timeTwo){
            alert(msgFive);
            break;
        }
        if(ageFive&&timeThree){
            alert(msgFive);
            break;
        }else{
            alert(msgSix);
            break;
        }

    case weekend:
        alert(msgSix);
        break;

    default:
        console.log(msgSix);
        break;
}