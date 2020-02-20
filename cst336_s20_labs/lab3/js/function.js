$(document).ready(function() {

    var score = 0;
    var attempts = localStorage.getItem("total_attempts");
    $("button").on("click", gradeQuiz);

    // Question 4
    displayQ4Choices();

    // Question 5 
    $(".q5Choice").on("click", function() {
        $(".q5Choice").css("background", "");
        $(this).css("background-color", "rgb(255,255,0)");
    });


    function displayQ4Choices() {
        let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
        q4ChoicesArray = _.shuffle(q4ChoicesArray);

        for (let i = 0; i < q4ChoicesArray.length; i++) {
            $("#q4Choices").append(` <input type="radio" name="q4" id="${q4ChoicesArray[i]}" value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`);
        }
    }

    function isFormValid() {
        let isValid = true;
        if ($("#q1").val() == "") {
            isValid = false;
            $("#validateFdbk").html("Question 1 was not answered");
        }
        return isValid;
    }

    function gradeQuiz() {
        $("#validateFdbk").html("");
        if (!isFormValid()) {
            return;
        }

        score = 0;
        let q1response = $("#q1").val().toLowerCase();
        let q2response = $("#q2").val();
        let q4response = $("input[name=q4]:checked").val();


        function rightAnswer(index) {
            $(`#q${index}Feedback`).html("Correct!");
            $(`#q${index}Feedback`).attr("class", "bg-success text-white");
            $(`#markImg${index}`).html("<img src = 'img/checkmark.png' alt='checkmark'>");
            score += 20;
        }

        function wrongAnswer(index) {
            $(`#q${index}Feedback`).html("Incorrect!");
            $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
            $(`#markImg${index}`).html("<img src = 'img/xmark.png' alt='xmark'>");
        }

        // Question 1 
        if (q1response == "sacramento") {
            rightAnswer(1);
        }
        else {
            wrongAnswer(1);
        }

        // Question 2 
        if (q2response == "mo") {
            rightAnswer(2);
        }
        else {
            wrongAnswer(2);
        }

        // Question 3 
        if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") && !$("#Jackson").is(":checked") && !$("#Franklin").is(":checked")) {
            rightAnswer(3);
        }
        else {
            wrongAnswer(3);
        }

        // Question 4
        if (q4response == "Rhode Island") {
            rightAnswer(4);
        }
        else {
            wrongAnswer(4);
        }

        // Question 5 
        if ($("#seal2").css("background-color") == "rgb(255,255,0)") {
            rightAnswer(5);
        }
        else {
            wrongAnswer(5);
        }

        if (score >= 80) {
            $("#totalScore").html(`Total Score: ${score}`).css("backgroun-color", "green");
            $("#totalMessage").html("Congrats! You scored higher than 80!").css("color", "green");
        }else {
            $("#totalScore").html(`Total Score: ${score}`).css("color", "red");
        }
        
        $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
        localStorage.setItem("total_attempts", attempts);

    }

});
