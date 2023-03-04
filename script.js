const questions = document.getElementsByClassName("p-question");
const answers = document.getElementsByClassName("p-answer");
const arrows = document.getElementsByClassName("arrow");

let newArray = [0,0,0,0,0];

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", (event) => {
        for (let i = 0; i < questions.length; i++) {
            questions[i].style.fontWeight = "";
            answers[i].style.display = "none";
            arrows[i].style.transform = "rotate(0deg)";            
        }


        
        if (newArray[i] == 1) {
            answers[i].style.display = "none";
            newArray[i] = 0;
        }else {
            event.target.style.fontWeight = "700";
            answers[i].style.display = "block";
            arrows[i].style.transform = "rotate(180deg)";
            newArray[i] = 1;
        }
    })
}