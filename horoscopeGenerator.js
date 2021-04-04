



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
    let words = {
        orderWord: ['avoid', 'consider'],
        actionWord: ['cutting out', 'kissing', 'saying you love', 'snapchatting', 'selling'],
        subjectWord: ['someone you fancy', 'your partner (best friend if single)','a family member']
    };
    if (sass+hustle < 10) {orderChosen = words.orderWord[0];}
        else {orderChosen = words.orderWord[1]};
    actionChosen = words.actionWord[Math.floor(Math.random()*words.actionWord.length)];
    subjectChosen = words.subjectWord[Math.floor(Math.random()*words.subjectWord.length)];
    let perfectPartner;
    let partnerWords = {
        names :['James', 'Sam', 'Ahmed', 'Dustin', 'Boil', 'Laura', 'Samantha', 'Anna'],
        jobs :['Software Engineer', 'currently seeking employment', 'Nurse', 'Dentist'],
        hometowns :['Amersham', 'London', 'Swansea', 'Cardiff']
    }
    let nameSelected= partnerWords.names[Math.floor(Math.random()*partnerWords.names.length)]; //randomly selects name
    let jobSelected = partnerWords.jobs[Math.floor(Math.random()*partnerWords.jobs.length)]; //randomly selects job
    let hometownSelected = partnerWords.hometowns[Math.floor(Math.random()*partnerWords.hometowns.length)]; //randomly selects hometown 
    if (energy >= 8) {perfectPartner =  `their name is ${nameSelected}, occupation is a ${jobSelected} and they live in ${hometownSelected}`}// console.log(perfectPartner); test to make sure object selector is working
        else {perfectPartner = 'low energy means no love today'};
    return `Your energy ratings are - sass:${sass}, hustle:${hustle}, intelligence:${intelligence}, energy:${energy}. Based on these results I would advise you ${orderChosen} ${actionChosen} ${subjectChosen}. Your energy levels are used to find your perfect partner: ${perfectPartner}`; //output of function
}





