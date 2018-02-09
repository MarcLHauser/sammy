var event = {
    
    "go to America?": {
        question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'",
        yes: "stay in hotel?",
        no: "freeze"
    },
    
    "freeze" : {
        causeDeath: "You have frozen to death because of Lithuania's cold climate."
    },
    
    "stay in hotel?": {
        question: "You arrive in New York. A man in a blue uniform says he knows a place you can stay at. Do you follow him to a hotel?",
        yes: "go to Chicago?",
        no: "alleyway"
    },
    
    "alleyway": {
        causeDeath: "You decide to sleep in an abandoned alleyway and find all your money gone in the morning. You starve to death because no one will give you a job."
    },
    
    "go to Chicago?": {
        question: "The man makes you pay enormous fees to get out. Once you get out of the hotel, you remember that your friend got rich in Chicago. Do you want to go to Chicago?",
        yes:  "go to stockyards?",
        no:  "homeless" 
    },
    
    "stay in New York tenement?": {
        question: "You stay in New York. Do you want to stay in a tenement?",
        no: "homeless",
        yes: "tenement"
    },
    
    "tenenment": {
        causeDeath: "You get tuberculosis after a few days in the tenement. It is fatal."
    },
    
    "homeless": {
        causeDeath: "You are homeless and you can't find work. You starve."
    },
    
    "go to stockyards?": {
        question: "You finally arrive in Chicago and you learn a new word: 'stockyards'. Do you want to go to the stockyards?",
        no: "wandering chicago",
        yes: "boardinghouse in stockyards?"
    },
    
    "wandering chicago" : {
        causeDeath : "You starve wandering Chicago."
    },
    
    "boardinghouse in stockyards?": {
        question: "You arrive in the stockyards. Coincidencetally, you run into your friend who owns a bodega. He gives a recommendation for a boardinghouse. Do you stay there?",
        no: "chicago tenement"
    },
    
    "chicago tenement" : {
        causeDeath:  "You quickly realize that the whole family cannot sleep in the streets. You find a tenement building to stay in for very little money, but it is very small and cramped. You get sick, because of the cramped consitions, and the disease is fatal."
    }
    
};

var state = 'go to America?';

var ask = function(){
    
    if( event[state].causeDeath === undefined ){
        
        return event[state].question;
        
    } else {
        
        console.log( event[state].causeDeath );
        return "Game Over.";
    }
};

var yes = function(){
    state = event[state].yes;
    return ask();
};

var no = function(){
    state = event[state].no;
    return ask();
};  

console.log( ask() );