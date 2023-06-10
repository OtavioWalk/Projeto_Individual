var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');

var resultFinal = undefined
var idUsuario = sessionStorage.ID_USUARIO;

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

// Soma os pontos das respostas

function totalScore() {
    var total_score =
        answers.question1 +
        answers.question2 +
        answers.question3 +
        answers.question4 +
        answers.question5;

    return total_score;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');

// Passar as questões

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

// Aumento da barra de progresso

function growProgressBar(percentage_width) {
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

div_container_29.style.display = "none";

submit5.addEventListener('click', function () {

    div_container_29.style.display = "block";

    const timer = (seconds) => {
        let time = seconds * 1000
        return new Promise(res => setTimeout(res, time))
    }

    // Início do carregamento

    async function Carregando() {
        for (var i = 0; i <= 7; i++) {

            if (i == 0) {

                div_imgCarregando.innerHTML = `<img src="/TestePersonalidade/Carregando%200%25.png" style="border-radius: 50px;">`
                await timer(2);

            } else if (i == 1) {

                div_imgCarregando.innerHTML = `<img src="/TestePersonalidade/Carregando%2025%25.png" style="border-radius: 50px;">`
                await timer(2);

            } else if (i == 2) {

                div_imgCarregando.innerHTML = `<img src="/TestePersonalidade/Carregando%2050%25.png" style="border-radius: 50px;">`
                await timer(1);

            } else if (i == 3) {

                div_imgCarregando.innerHTML = `<img src="/TestePersonalidade/Carregando%2050%25.png" style="border-radius: 50px;">`
                await timer(2);

            } else if (i == 4) {

                div_imgCarregando.innerHTML = `<img src="/TestePersonalidade/Carregando%2075%25.png" style="border-radius: 50px;">`
                await timer(1);

            } else if (i == 5) {

                div_imgCarregando.innerHTML = `<img src="/TestePersonalidade/Carregando%2099%25.png" style="border-radius: 50px;">`
                await timer(1);

                // Fim do carregamento

            } else if (i == 6) {

                // Início da decisão de personagem

                console.log(totalScore())

                if (totalScore() >= 4 && totalScore() <= 7) {

                    resultFinal = `Aloy`
                    alert(resultFinal)
                    sessionStorage.nomePersonagem = resultFinal
                    cadastrar(idUsuario, resultFinal);


                    window.location.href = "../Resultados/ResultAloy.html"

                } else if (totalScore() >= 8 && totalScore() <= 11) {

                    resultFinal = `Deacon`
                    alert(resultFinal)
                    sessionStorage.nomePersonagem = resultFinal
                    cadastrar(idUsuario, resultFinal);

                    window.location.href = "../Resultados/ResultDeacon.html"

                } else if (totalScore() >= 12 && totalScore() <= 15) {

                    resultFinal = `Jim Sakai`
                    alert(resultFinal)
                    sessionStorage.nomePersonagem = resultFinal
                    cadastrar(idUsuario, resultFinal);
                    window.location.href = "../Resultados/ResultJim.html"

                } else if (totalScore() >= 16 && totalScore() <= 20) {

                    resultFinal = `Kratos`
                    alert(resultFinal)
                    sessionStorage.nomePersonagem = resultFinal
                    cadastrar(idUsuario, resultFinal);

                    window.location.href = "../Resultados/ResultKratos.html"

                }

                // Fim da decisão de personagem

                break
            }
        }
    }

    Carregando();

})

// Início do guardar resultado

var graficoVar = '';
function cadastrar(fkUsuario, resultadoTeste) {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo

    if (fkUsuario == "" || resultadoTeste == ``) {

        console.log("Mensagem de erro para todos os campos em branco");

        return false;
    }

    // Enviando o valor da nova input
    fetch(`/grafico/cadastrar/${fkUsuario}/${resultadoTeste}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            console.log("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

        }

    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;
}

    // Fim do guardar resultado
