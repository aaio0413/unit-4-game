$(function() {
    var wins = 0;
    var loses = 0;
    var currentScore = 0;
    var targetScore = 0;

    var targetScore = function() {
        targetScore = Math.floor(Math.random()*140) - 20;
        while(targetScore < 19) {
            targetScore = Math.floor(Math.random()*140) - 20;
        }
        return targetScore;
    }

    $('#targetScore').html(targetScore());

    var randomNumberGenerator = function () {
        var randomNum = Math.floor(Math.random()*11) + 1;
        return randomNum;

    }

    

    var Letter = function(letter, value) {
        this.letter = letter,
        this.value = value,
        this.getLetter = function() {return this.letter;},
        this.getValue = function() {return this.value;}
    }
    
    var m = new Letter('M', randomNumberGenerator());
    var a = new Letter('A', randomNumberGenerator());
    var r = new Letter('R', randomNumberGenerator());
    var v = new Letter('V', randomNumberGenerator());
    var e = new Letter('E', randomNumberGenerator());
    var l = new Letter('L', randomNumberGenerator());
    
    var marvel = new Array (m, a, r, v, e, l);


    $('.letters').on('click', function() {

    var letterId = $(this).attr('id');
    console.log(letterId);

    if(letterId === 'm') {
        currentScore += m.getValue();
    } else if(letterId === "a") {
        currentScore += a.getValue();
    } else if(letterId === "r") {
        currentScore += r.getValue();
    } else if(letterId === "v") {
        currentScore += v.getValue();
    } else if(letterId === "e") {
        currentScore += e.getValue();
    } else if(letterId === "l") {
        currentScore += l.getValue();
    }

    if (currentScore > targetScore) {
        $('#headInstruction').empty();
        $('#headInstruction').html('YOU LOSE!!')
       
        loses++;
    } else if (currentScore === targetScore) {
        $('#headInstruction').empty();
        $('#headInstruction').html('YOU WON!!')
        wins++;
   
    }
 

 
    updateResults();

    });

    var updateResults = function() {

    $('#wins').html(wins);
    $('#loses').html(loses);
    $('#currentScore').html(currentScore);
    }

    updateResults();
});