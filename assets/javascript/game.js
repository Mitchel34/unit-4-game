$(document).ready(function () {
    //Variables
    //Generates computer number (19-120)
    //Generates values for each crystal (1-12)

    var cpuNumber = parseInt([Math.floor(Math.random() * (120 - 19 + 1) + 19)]);

    var crystalRedValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Red Crystal: " + crystalRedValue);

    var crystalBlueValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Blue Crystal: " + crystalBlueValue);

    var crystalYellowValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Yellow Crsytal: " + crystalYellowValue);

    var crystalGreenValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Green Crystal: " + crystalGreenValue);

    var userNumber = 0;

    var wins = 0;

    var losses = 0;

    //Update HTML function
    //Function that updates wins and losses
    function updateHtml() {
        $(".cpuNumber").text(cpuNumber);
        console.log("Number to match: " + cpuNumber);

        $(".total-score").text(userNumber);
        console.log("Total score: " + userNumber);

        $(".wins").text(wins);
        console.log("Wins: " + wins);

        $(".losses").text(losses);
        console.log("Losses: " + losses);
    };

    //Updates Html at the start of the game
    updateHtml();

    //Reset game function
    function reset() {
        cpuNumber = parseInt([Math.floor(Math.random() * (120 - 19 + 1) + 19)]);

        crystalRedValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Red Crystal: " + crystalRedValue);

        crystalBlueValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Blue Crystal: " + crystalBlueValue);

        crystalYellowValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Yellow Crystal: " + crystalYellowValue);

        crystalGreenValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Green Crystal: " + crystalGreenValue);

        userNumber = 0;
    };

    //Function when user reaches or exceeds desired number
    function winOrLose() {
        if (userNumber === cpuNumber) {
            wins++;
            $(".you-win-lose").text("You win!");
            console.log("WIN");
            console.log("Wins: " + wins);
            reset();
            updateHtml();
        };

        if (userNumber > cpuNumber) {
            losses++;
            $(".you-win-lose").text("You lose!");
            console.log("LOSS");
            console.log("Losses: " + losses);
            reset();
            updateHtml();
        };
    };

    //Function to update total score
    function userScore() {
        console.log("Total score: " + userNumber);
        $(".total-score").text(userNumber);
    }

    //Cursor changes to hand while hovering over crystals
    $(".crystalRed, .crystalBlue, .crystalYellow, .crystalGreen").hover(function () {
        $(this).css("cursor", "hand");
    });

    //On-click events for each crystal 
    $(".crystalRed").on("click", function () {
        userNumber = userNumber + crystalRedValue;
        $(".you-win-lose").text("");
        userScore();
        winOrLose();
    });

    $(".crystalBlue").on("click", function () {
        userNumber = userNumber + crystalBlueValue;
        $(".you-win-lose").text("");
        userScore();
        winOrLose();
    });

    $(".crystalYellow").on("click", function () {
        userNumber = userNumber + crystalYellowValue;
        $(".you-win-lose").text("");
        userScore();
        winOrLose();
    });

    $(".crystalGreen").on("click", function () {
        userNumber = userNumber + crystalGreenValue;
        $(".you-win-lose").text("");
        userScore();
        winOrLose();
    });


});