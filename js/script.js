var TranslateArray = [
    {
        Spanish: "Chido",
        English: "Cool"
    }, {
        Spanish: "Güey",
        English: "Dude"
    }, {
        Spanish: "Neta",
        English: "Truth (or really)"
    }, {
        Spanish: "Chamba",
        English: "Job"
    }, {
        Spanish: "Bronca",
        English: "Problem"
    }, {
        Spanish: "Fresa",
        English: "Snob (or preppy)"
    }, {
        Spanish: "Carnal",
        English: "Bro (or buddy)"
    }, {
        Spanish: "Flaite",
        English: "Low-class (Chilean slang)"
    }, {
        Spanish: "Chavo/a",
        English: "Kid"
    }, {
        Spanish: "Orale",
        English: "Alright (or wow)"
    }, {
        Spanish: "Pedo",
        English: "Problem (or drunk, depending on context)"
    }, {
        Spanish: "Chela",
        English: "Beer"
    }, {
        Spanish: "Lancha",
        English: "Car (used in Venezuela)"
    }, {
        Spanish: "Morro/a",
        English: "Kid (used in Mexico)"
    }, {
        Spanish: "Jalar",
        English: "To work hard (or pull)"
    }, {
        Spanish: "Ruca",
        English: "Girlfriend (or old lady, used in some Latin American countries)"
    }, {
        Spanish: "Changarrito",
        English: "Small business (or food stand)"
    }, {
        Spanish: "Pana",
        English: "Friend (used in Venezuela)"
    }, {
        Spanish: "Jefe/a",
        English: "Boss (or dad/mom)"
    }, {
        Spanish: "Tirar la hueva",
        English: "To be lazy (or slack off)"
    }, {
        Spanish: "Inefable",
        English: "Ineffable"
    }, {
        Spanish: "Epifanía",
        English: "Epiphany"
    }, {
        Spanish: "Elucidar",
        English: "Elucidate"
    }, {
        Spanish: "Inexorable",
        English: "Inexorable"
    }, {
        Spanish: "Perenne",
        English: "Perennial"
    }, {
        Spanish: "Sempiterno",
        English: "Eternal"
    }, {
        Spanish: "Pulcritud",
        English: "Neatness"
    }, {
        Spanish: "Venerable",
        English: "Venerable"
    }, {
        Spanish: "Disyuntiva",
        English: "Dilemma"
    }, {
        Spanish: "Paradoja",
        English: "Paradox"
    }, {
        Spanish: "Resiliencia",
        English: "Resilience"
    }, {
        Spanish: "Onírico",
        English: "Dreamlike"
    }, {
        Spanish: "Inequívoco",
        English: "Unmistakable"
    }, {
        Spanish: "Procrastinar",
        English: "Procrastinate"
    }, {
        Spanish: "Efímero",
        English: "Ephemeral"
    }, {
        Spanish: "Escrupuloso",
        English: "Scrupulous"
    }, {
        Spanish: "Inmanente",
        English: "Immanent"
    }, {
        Spanish: "Sibilante",
        English: "Sibilant"
    }, {
        Spanish: "Lúgubre",
        English: "Gloomy"
    }, {
        Spanish: "Trascendental",
        English: "Transcendental"
    }
];
function Transl(){
    const swInput = document.getElementById("sw").value;
    var sw = swInput;
    var found = false;
    for (let i = 0; i < 40; i++) {
        if(sw==TranslateArray[i].Spanish){
            alert("Meaning: " + TranslateArray[i].English);
            found = true;
        }
    }
    if (found==false){
        alert("Word not found in the translation list.");
    }
}