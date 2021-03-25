



const horoGen = horoSign => {
    horoSign = horoSign.toLowerCase(); //turns input to lower case to avoid uppercase throwing error
    const randNumber = (Math.floor(Math.random() * 7)) + 2; //creates random number that is then used to calculate horoscope
    let sass, hustle, intelligence, energy; //defines variables for energy levels
    switch (horoSign) { //switch cases for horoSign input
        case 'aries':
            sass = randNumber + 2;
            hustle = randNumber + 1;
            intelligence = randNumber;
            energy = randNumber - 1;
            break;
        case 'taurus':
            sass = randNumber - 1;
            hustle = randNumber + 2;
            intelligence = randNumber + 1;
            energy = randNumber;
            break;
        case 'gemini':
            sass = randNumber + 2;
            hustle = randNumber + 1;
            intelligence = randNumber;
            energy = randNumber - 1;
            break;
        case 'cancer':
            sass = randNumber;
            hustle = randNumber - 1;
            intelligence = randNumber + 2;
            energy = randNumber + 1;
            break;
        case 'leo':
            sass = randNumber + 1;
            hustle = randNumber;
            intelligence = randNumber - 1;
            energy = randNumber + 2;
            break;
        case 'virgo':
            sass = randNumber + 2;
            hustle = randNumber + 1;
            intelligence = randNumber;
            energy = randNumber - 1;
            break;
        case 'libra':
            sass = randNumber + 2;
            hustle = randNumber - 1;
            intelligence = randNumber - 1;
            energy = randNumber;
            break;
        case 'scorpio':
            sass = randNumber + 1;
            hustle = randNumber + 0;
            intelligence = randNumber + 2;
            energy = randNumber - 2;
            break;
        case 'sagittarius':
            sass = randNumber - 2;
            hustle = randNumber;
            intelligence = randNumber + 1;
            energy = randNumber + 2;
            break;
        case 'capricorn':
            sass = randNumber + 1;
            hustle = randNumber + 1;
            intelligence = randNumber + 1;
            energy = randNumber - 1;
            break;
        case 'aquarius':
            sass = randNumber;
            hustle = randNumber + 1;
            intelligence = randNumber + 1;
            energy = randNumber - 1;
            break;
        case 'pisces':
            sass = randNumber + 1;
            hustle = randNumber + 2;
            intelligence = randNumber;
            energy = randNumber + 1;
            break;
        default:
            return 'Please input valid starsign';
    };
    let orderChosen, actionChosen, subjectChosen; //defines variables for action
    let orderWord = ['avoid', 'consider'];
    let actionWord= ['cutting out', 'kissing', 'saying you love', 'snapchatting', 'selling'];
    let subjectWord= ['someone you fancy', 'your partner (best friend if single)','a family member'];
    if (sass+hustle < 10) {orderChosen = orderWord[0];}
        else {orderChosen = orderWord[1]};
    actionChosen = actionWord[Math.floor(Math.random()*actionWord.length)];
    subjectChosen = subjectWord[Math.floor(Math.random()*subjectWord.length)];
    return `Your energy ratings are sass:${sass}, hustle:${hustle}, intelligence:${intelligence}, energy:${energy}. Based on these results I would advise you ${orderChosen} ${actionChosen} ${subjectChosen}`; //output of function
}



