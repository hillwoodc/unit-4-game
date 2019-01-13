$("document").ready(function() {

    var wins = 0;

    var losses = 0;

    var totalScore = 0;

    // Generate and show random number
    var randomNumber = Math.floor(Math.random() * 102) +19;
    $("#random-number").text(randomNumber);  

    // Assign random numbers to reds
    var red = Math.floor(Math.random() * 12) +1;
    $("#red").val(red);
    console.log(red);

    var green = Math.floor(Math.random() * 12) +1;
    $("#green").val(green);
    console.log(green);

    var blue = Math.floor(Math.random() * 12) +1;
    $("#blue").val(blue);
    console.log(blue);

    var yellow = Math.floor(Math.random() * 12) +1;
    $("#yellow").val(yellow)
    console.log(yellow);  

    // Show wins and losses
    $("#result").text("Let's go!");

    $("#wins").text("Wins: " + wins);

    $("#losses").text("Losses: " + losses);
    

    function gameStart() {

        randomNumber = Math.floor(Math.random() * 102) +19;
        $("#random-number").text(randomNumber);

        red = Math.floor(Math.random() * 12) +1;
        $("#red").val(red);
        console.log(red);

        green = Math.floor(Math.random() * 12) +1;
        $("#green").val(green);
        console.log(green);

        blue = Math.floor(Math.random() * 12) +1;
        $("#blue").val(blue);
        console.log(blue);

        yellow = Math.floor(Math.random() * 12) +1;
        $("#yellow").val(yellow);
        console.log(yellow);

        totalScore = 0

        $("#scorecounter").text(totalScore);


    };

    // Click events

        $("#red").on("click", function() {
            totalScore += parseInt(red);
                $("#scorecounter").text(totalScore);
                    if (totalScore === randomNumber) {
                        $("#result").text("You won!");
                        wins++;
                        $("#wins").text("Wins: " + wins);
                    gameStart();
                    } 
                    else if (totalScore > randomNumber) {
                        $("#result").text("You lost");
                        losses++;
                        $("#losses").text("Losses: " + losses);
                    gameStart ();
                    }   
        });

        $("#green").on("click", function() {
            totalScore += parseInt(green);
                $("#scorecounter").text(totalScore);

                   if (totalScore === randomNumber) {
                       $("#result").text("You won!");
                       wins++;
                       $("#wins").text("Wins: " + wins);
                    gameStart();
                   } 
                   else if (totalScore > randomNumber) {
                       $("#result").text("You lost");
                       losses++;
                       $("#losses").text("Losses: " + losses);
                    gameStart ();
                   }
        });

        $("#blue").on("click", function() {
            totalScore += parseInt(blue);
                $("#scorecounter").text(totalScore);
        
                    if (totalScore === randomNumber) {
                        $("#result").text("You won!");
                        wins++;
                        $("#wins").text("Wins: " + wins);
                    gameStart();
                    } 
                    else if (totalScore > randomNumber) {
                        $("#result").text("You lost");
                        losses++;
                        $("#losses").text("Losses: " + losses);
                    gameStart ();
                    }
        });

        $("#yellow").on("click", function() {
            totalScore += parseInt(yellow);
                $("#scorecounter").text(totalScore);
        
                    if (totalScore === randomNumber) {
                        $("#result").text("You won!");
                        wins++;
                        $("#wins").text("Wins: " + wins);
                    gameStart();
                    } 
                    else if (totalScore > randomNumber) {
                        $("#result").text("You lost");
                        losses++;
                        $("#losses").text("Losses: " + losses);
                    gameStart ();
                    }
        });

});