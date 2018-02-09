var event = {
    
    "go to America?": {
        question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'",
        yes: "stay in hotel?"
    },
    
    "stay in hotel?": {
        question: "You arrive in New York. A man in a blue uniform says he knows a place you can stay at. Do you follow him to a hotel?"
    },
    
    "go to Chicago?": {
        question: "The man makes you pay enormous fees to get out. Once you get out of the hotel, you remember that your friend got rich in Chicago. Do you want to go to Chicago?"
    },
    
    "stay in New York tenement?": {
        question: "You stay in New York. Do you want to stay in a tenement?"
    },
    
    "go to stockyards?": {
        question: "You finally arrive in Chicago and you learn a new word: 'stockyards'. Do you want to go to the stockyards?"
    },
    
    "boardinghouse in stockyards?": {
        question: "You arrive in the stockyards. Coincidencetally, you run into your friend who owns a bodega. He gives a recommendation for a boardinghouse. Do you stay there?"
    }
    
};

var state = 'go to America?';

var player = {
    alive: true,
    causeDeath: "yay"
};

var ask = function(){
    
    if(player.alive){
        
        console.log( event[state].question );
        
        return "";
    
    } else {
    
        console.log(player.causeDeath);
        return "Game Over.";
    }

};

var n = 0;  

var yes = function(){
    
    //go to stockyards?
    if (n == 4){
        player.questionNumber = questions[5];
        return ask();
    }
    
    //stay in New York tenement?
    if (n == 3){
        player.alive = false;
        player.causeDeath = "You get tuberculosis after a few days in the tenement. It is fatal.";
    }
    
    n = n + 1;
    player.questionNumber = questions[n];
    return ask();
};

var no = function(){
    
    //go to America?
    if(n === 0){
    player.alive = false;
    player.causeDeath = "You have frozen to death because of Lithuania's cold climate.";
    return ask();
    }
    
    //stay in hotel?
    if(n == 1){
        player.alive = false;
        player.causeDeath = "You decide to sleep in an abandoned alleyway and find all your money gone in the morning. You starve to death because no one will give you a job.";
        return ask();
    }
    
    //go to Chicago?
    if (n == 2){
        player.questionNumber = questions[3];
        return ask();
    }
    
    //stay in tenement in New York?
    if (n == 3){
        player.alive = false;
        player.causeDeath = "You are homeless and you can't find work. You starve.";
        return ask();
    }
    
    //go to stockyards?
    if (n == 4){
        player.alive = false;
        player.causeDeath = "You starve wandering Chicago.";
        return ask();
    }
    
    //boardinghouse in stockyards?
    if (n == 5){
        player.alive = false;
        player.causeDeath = "You quickly realize that the whole family cannot sleep in the streets. You find a tenement building to stay in for very little money, but it is very small and cramped. You get sick, because of the cramped consitions, and the disease is fatal.";
        return ask();
    }
};  

ask();