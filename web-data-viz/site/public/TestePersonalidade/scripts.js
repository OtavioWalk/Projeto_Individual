var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');

function storeAnswer(question_number, event) {
    if (event.target.type === 'radio') {
        console.log(event.target.value);
        answers['question' + question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function (event) {
    storeAnswer(1, event)
})
question_two.addEventListener('click', function (event) {
    storeAnswer(2, event)
})
question_three.addEventListener('click', function (event) {
    storeAnswer(3, event)
})
question_four.addEventListener('click', function (event) {
    storeAnswer(4, event)
})
question_five.addEventListener('click', function (event) {
    storeAnswer(5, event)
})

function totalScore() {
    var total_score =
        answers.question1 +
        answers.question2 +
        answers.question3 +
        answers.question4 +
        answers.question5;

    return total_score;
}

function getInfoBasedOnScore() {
    if (totalScore() < 7) {
        var score_info = "Você precisa tomar mais cuidado com a segurança!";
    } else if (totalScore() > 7) {
        var score_info = "Parabéns! Você está bem de segurança!"
    }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');

function nextQuestion(question_number) {
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-' + question_number);
    var el2 = document.getElementById('question-' + current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}


submit1.addEventListener('click', function () {

    if (!(document.getElementById("question-1-answer-a").checked || document.getElementById("question-1-answer-b").checked || document.getElementById("question-1-answer-c").checked || document.getElementById("question-1-answer-d").checked)) {

        alert('Selecione uma questão para continuar')

    } else {
        nextQuestion(2);
        growProgressBar('40%');
    }
})


submit2.addEventListener('click', function () {

    if (!(document.getElementById("question-2-answer-a").checked || document.getElementById("question-2-answer-b").checked || document.getElementById("question-2-answer-c").checked || document.getElementById("question-2-answer-d").checked)) {

        alert('Selecione uma questão para continuar')

    } else {
        nextQuestion(3);
        growProgressBar('60%');
    }
})


submit3.addEventListener('click', function () {

    if (!(document.getElementById("question-3-answer-a").checked || document.getElementById("question-3-answer-b").checked || document.getElementById("question-3-answer-c").checked || document.getElementById("question-3-answer-d").checked)) {

        alert('Selecione uma questão para continuar')

    } else {

        nextQuestion(4);
        growProgressBar('80%');
    }
})


submit4.addEventListener('click', function () {

    if (!(document.getElementById("question-4-answer-a").checked || document.getElementById("question-4-answer-b").checked || document.getElementById("question-4-answer-c").checked || document.getElementById("question-4-answer-d").checked)) {

        alert('Selecione uma questão para continuar')

    } else {

        nextQuestion(5);
        growProgressBar('100%');
    }
})


submit5.addEventListener('click', function () {

    if (!(document.getElementById("question-5-answer-a").checked || document.getElementById("question-5-answer-b").checked || document.getElementById("question-5-answer-c").checked || document.getElementById("question-5-answer-d").checked)) {

        alert('Selecione uma questão para continuar')

    } else {
    nextQuestion(6);
    }
})

submit5.addEventListener('click', function () {
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width) {
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}


div_container_29.style.display = "none";



submit5.addEventListener('click', function () {

    // 'question-5'.style.display = "none"
    div_container_29.style.display = "block";

    const timer = (seconds) => {
        let time = seconds * 1000
        return new Promise(res => setTimeout(res, time))
    }
    async function Carregando() {
        for (var i = 0; i <= 7; i++) {

            if (i == 0) {

                div_imgCarregando.innerHTML = `<img src="../assets/imagens/Carregando/Carregando 0%.png" style="border-radius: 50px;">`
                await timer(2);

            } else if (i == 1) {

                div_imgCarregando.innerHTML = `<img src="../assets/imagens/Carregando/Carregando 25%.png" style="border-radius: 50px;">`
                await timer(2);

            } else if (i == 2) {

                div_imgCarregando.innerHTML = `<img src="../assets/imagens/Carregando/Carregando 50%.png" style="border-radius: 50px;">`
                await timer(4);

            } else if (i == 3) {

                div_imgCarregando.innerHTML = `<img src="../assets/imagens/Carregando/Carregando 75%.png" style="border-radius: 50px;">`
                await timer(4);

            } else if (i == 4) {

                div_imgCarregando.innerHTML = `<img src="../assets/imagens/Carregando/Carregando 99%.png" style="border-radius: 50px;">`
                await timer(6);

            } else if (i == 5) {

                div_imgCarregando.innerHTML = `<img src="../assets/imagens/Carregando/Carregando 100%.png" style="border-radius: 50px;">`
                await timer(3);

            } else if (i == 6) {

                div_container_29.style.display = "none"
                
                window.location.href = "../Teste Bolinhas/Resultado_Aloy"

            }

        }

    }

    Carregando();


})
