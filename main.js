$(document).ready(function () {
    let espUs;
    const author = "Petr Vopalecky";

    espUs = true;

    $("#usEsp").click(function () {
        espUs = false;
    });

    $("#espUs").click(function () {
        espUs = true;
    });

    function getRandomWord(espUs) {
        $(".card-text").hide();

        let randomWord = vocab[Math.floor(Math.random() * vocab.length)];

        if (espUs == true) {
            $(".card-title").text(randomWord[0])
            $(".card-text").text(randomWord[1])
        }
        else {
            $(".card-title").text(randomWord[1])
            $(".card-text").text(randomWord[0])
        }

    }

    $(".next").click(function () {
        getRandomWord(espUs);
    })

    $(".show").click(function () {
        $(".card-text").fadeIn();
    });

    $("#countVocab").html(vocab.length);

    getRandomWord(espUs);


});