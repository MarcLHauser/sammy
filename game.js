lithuania = {
    question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'"
};
    
freeze = {
    causeDeath: "You have frozen to death because of Lithuania's cold climate."
};

america = {
    question: "You arrive in New York. A man in a blue uniform says he knows a place you can stay at. Do you follow him to a hotel?"
};

alleyway = {
    causeDeath: "You decide to sleep in an abandoned alleyway and find all your money gone in the morning. You starve to death because no one will give you a job."
};

hotel = {
    question: "The man makes you pay enormous fees to get out. Once you get out of the hotel, you remember that your friend got rich in Chicago. Do you want to go to Chicago?"
};

stay = {
    question: "You stay in New York. Do you want to stay in a tenement?"
};

tenement = {
    causeDeath: "You get tuberculosis after a few days in the tenement. It is fatal."
};

homeless = {
    causeDeath: "You are homeless and you can't find work. You starve."
};

chicago = {
    question: "You finally arrive in Chicago and you learn a new word: 'stockyards'. Do you want to go to the stockyards?"
};

wandering = {
    causeDeath : "You starve wandering Chicago."
};

stockyards = {
    question: "You arrive in the stockyards. Coincidencetally, you run into your friend who owns a bodega. He gives a recommendation for a boardinghouse. Do you stay there?"
};

streets = {
    causeDeath:  "You quickly realize that the whole family cannot sleep in the streets. You find a tenement building to stay in for very little money, but it is very small and cramped. You get sick, because of the cramped consitions, and the disease is fatal."
};

boardinghouse = {
    question: 'More questions to come...'
};

lithuania.yes   = america;
lithuania.no    = freeze;
america.yes     = hotel;
america.no      = alleyway;
hotel.yes       =  chicago;
hotel.no        = stay;
stay.yes        = tenement;
stay.no         = homeless;
chicago.yes     = stockyards;
chicago.no      = wandering;
stockyards.yes  = boardinghouse;
stockyards.no   = streets;

var place = lithuania;

var ask = function(){
    if( place.causeDeath === undefined ){  
        return place.question;
    } else {
        console.log( place.causeDeath );
        return "Game Over.";
    }
};

var yes = function(){
    place = place.yes;
    return ask();
};

var no = function(){
    place = place.no;
    return ask();
};

console.log( ask() );