const box=document.querySelector(".box")
const itemOne=document.querySelector(".item-one")
const invite=document.getElementById("invite")
const answer=document.querySelector(".answer-1")
const answerThree=document.querySelector(".answer-3")
const password=document.getElementById("password")
const answerTwo=document.querySelector(".answer-2")
const uplode=document.getElementById("uplode")
const answerFour=document.querySelector(".answer-4")
const subscription=document.getElementById("subscription")
const answerFive=document.querySelector(".answer-5")
const support=document.getElementById("support")

//arrows
const arrowOne=document.getElementById('arrow1')
const arrowTwo=document.getElementById('arrow2')
const arrowThree=document.getElementById('arrow3')
const arrowFour=document.getElementById('arrow4')
const arrowFive=document.getElementById('arrow5')

const buttons = document.getElementsByClassName('btn');

//questions
const first=document.querySelector('.first')
const second=document.querySelector('.second')
const third=document.querySelector('.third')
const fourth=document.querySelector('.fourth')
const fifth=document.querySelector('.fifth')






invite.addEventListener("click",  () => {
    if (answer.style.display === "none") {
        answer.style.display = "block";
        arrowOne.style.transform='rotate(180deg)';
        first.style.fontWeight='700';
        first.style.color='#1E1F36';
        answerFour.style.display='none';
        answerThree.style.display='none';
        answerTwo.style.display='none';
        answerFive.style.display='none';


    } else {
        answer.style.display = "none";
        arrowOne.style.transform='none';
        first.style.fontWeight='400';
        first.style.color='default';

    }
});


password.addEventListener("click", () => {

    if (answerThree.style.display === "none") {
        answerThree.style.display = "block";
        arrowThree.style.transform='rotate(180deg)';
        third.style.fontWeight='700';
        third.style.color='#1E1F36';
        // answerFour.style.display='none';
        // answerFive.style.display='none';
        // answerTwo.style.display='none';
        // answer.style.display='none';




    } else {
        answerThree.style.display = "none";
        arrowThree.style.transform='none';
        third.style.fontWeight='400';
        third.style.color='none';


    }
});

support.addEventListener("click", () => {
    if (answerFive.style.display === "none") {
        answerFive.style.display = "block";
        arrowFive.style.transform='rotate(180deg)';
        fifth.style.fontWeight='700';
        fifth.style.color='#1E1F36';
        answerFour.style.display='none';
        answerThree.style.display='none';
        answerTwo.style.display='none';
        answer.style.display='none';
    } else {
        answerFive.style.display = "none";
         arrowFive.style.transform='none';
         fifth.style.fontWeight='400';
         fifth.style.color='none';
 

    }
});

uplode.addEventListener("click", () => {
    if (answerTwo.style.display === "none") {
        answerTwo.style.display = "block";
        arrowTwo.style.transform='rotate(180deg)';
        second.style.fontWeight='700';
        second.style.color='#1E1F36';
        answerFour.style.display='none';
        answerThree.style.display='none';
        answerFive.style.display='none';
        answer.style.display='none';
    } else {
        answerTwo.style.display = "none";
        arrowTwo.style.transform='none';
        second.style.fontWeight='400';
        second.style.color='none';


    }
});


subscription.addEventListener("click", () => {
    if (answerFour.style.display === "none") {
        answerFour.style.display = "block";
        arrowFour.style.transform='rotate(180deg)';
        fourth.style.fontWeight='700';
        fourth.style.color='#1E1F36';
        answerFive.style.display='none';
        answerThree.style.display='none';
        answerTwo.style.display='none';
        answer.style.display='none';

    } else {
        answerFour.style.display = "none";
        arrowFour.style.transform='none';
        fourth.style.fontWeight='400';
        fourth.style.color='none';


    }
});



