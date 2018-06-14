
$(function() {
    var wins = 0;
    var loses = 0;
    var currentScore = 0;
    var targetScore = 0;
    var htmlTopLeftHead = $('#top-left-head').html();
    var htmlTopMiddleHead = $('#top-middle-head').html();



    var targetSc = function() {
        targetScore = Math.floor(Math.random()*140) - 20;
        while(targetScore < 19) {
            targetScore = Math.floor(Math.random()*140) - 20;
        }
    }
    
    targetSc();

    $('#targetScore').html(targetScore);
    var randomNumberGenerator = function () {
        var randomNum = Math.floor(Math.random()*11) + 1;
        return randomNum;

    }
    // class Letter {
    //     constructor(letter, value) {
    //         this.letter = letter;
    //         this.value = value;
    //     }
    //     getLetter = function() {

    //     }
    // }

    var Letter = function(letter, value) {
        this.letter = letter;
        this.value = value;
        this.getLetter = function() {return this.letter;}
        this.getValue = function() {return this.value;}
        this.resetValue = function() {this.value = randomNumberGenerator();}
    }
    
    var m = new Letter('M', randomNumberGenerator());
    var a = new Letter('A', randomNumberGenerator());
    var r = new Letter('R', randomNumberGenerator());
    var v = new Letter('V', randomNumberGenerator());
    var e = new Letter('E', randomNumberGenerator());
    var l = new Letter('L', randomNumberGenerator());
    var marvel = new Array (m, a, r, v, e, l);

    var reset = function() {
        targetSc();
        resetNum();
        currentScore = 0;
    };

    var resetNum = function() {
        m.resetValue();
        a.resetValue();
        r.resetValue();
        v.resetValue();
        e.resetValue();
        l.resetValue();
    }

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
        // $('#top-left-head').html("<button id=\"top-left-button\">Restart</button>")
        // $('#top-left-button').on('click', function reset() {
        //     $('#top-left-head').html(htmlTopLeftHead);
        //     $('#top-middle-head').html(htmlTopMiddleHead);
        // })
        afterFinish();
        loses++;
        reset();
        updateResults();
    } else if (currentScore === targetScore) {
        $('#headInstruction').empty();
        $('#headInstruction').html('YOU WON!!')
        afterFinish();
        wins++;
        reset();
        updateResults();
    }
 
    updateResults();
 
   

    });

    var afterFinish = function() {
        $('#top-left-head').html("<p id=\"top-left-button\" class=\"middle-head\">Restart</p>")
        $('#top-left-button').on('click', function resetOne() {
            $('#top-left-head').html(htmlTopLeftHead);
            $('#top-middle-head').html(htmlTopMiddleHead);
            $('#targetScore').html(targetScore);
        })
    }
 

    var updateResults = function() {

    $('#wins').html(wins);
    $('#loses').html(loses);
    $('#currentScore').html(currentScore);
    };


    updateResults();

});


