const mots = [
    "sans précédent",
    "inedit",
    "mayotte",
    "ensemble",
    "gouvernement",
    "république",
    "reuni",
    "reconstruction",
    "notre dame",
    "jo",
    "medaille",
    "reussite",
    "pouvoir",
    "homologue",
    "fetes",
    "compatriote",
    "collaboration",
    "unis",
    "nation",
    "abstinence",
    "serrer la ceinture",
    "difficile",
    "crise",
    "europe",
    "mondial",
    "conflit",
    "solution",
    "pardon",
    "capacité",
    "nourrir",
    "mobiliser",
    "budget",
    "epoque",
    "extrême",
    "Patriote",
    "ensemble",
    "bloc",
    "republicain",
    "force",
    "parlement",
    "bienveillance",
    "partage",
    "valeur",
    "ambition",
    "perte",
    "authentique",
    "industrie",
    "ivresse",
    "gauche",
    "accord",
    "union",
    "compromis",
    "avancer",
    "futur",
    "négociation",
    "partenaire",
    "passer",
    "drame",
    "manifestation",
    "rassemblement",
    "pomice",
    "éducation",
    "santé",
    "hospital",
    "covid",
    "engagement",
    "mobilisation",
    "territoire",
    "campagne",
    "province",
    "populaire",
    "dommage",
    "travail",
    "oublie",
    "compris",
    "compliqué",
    "catastrophe",
    "résolution",
    " persistance",
    "persévérance",
    "desastre",
    "démocratie",
    "comprendre",
    "effort",
    "commun",
    "participation",
    "piste",
    "voir",
    "profiter",
    "immigration",
    "mort",
    "americain",
    "Conséquences",
    "étranger",
    "saison",
    "erreur",
    "siecle",
    "aire",
    "année",
    "avancée",
    "respect",
    "loi",
    "note",
    "technologie",
    "entraide",
    "gilet jaune",
    "palestine",
    "israel",
    "ukraine",
    "rencontre",
    "confession",
    "collectif",
    "soutien",
    "sécurité",
    "outre mer",
    "inflation",
    "altruiste",
    "enfant",
    "religion",
    "vivre",
    "partage",
    "otage"];



let bingo = localStorage.getItem("bingo");
if (!bingo) {
    const result = []
    for (const item of mots) {
        if (!result.includes(item)) {
            result.push(item)
        }
    }
    result.sort((a, b) => Math.random() - 0.5);
    bingo = result.slice(0, 25);
    localStorage.setItem("bingo", JSON.stringify(bingo));
} else {
    bingo = JSON.parse(bingo);
}

let bingoDom = "";
bingo.forEach(mot => {
    bingoDom += `<div class="case" data-mot="${mot}">
        <div class="stabilo">${mot}</div>
    </div>`;
})
let n=0;
bingo = bingo.map(mot => {return{mot:mot, position: n++}})

document.querySelector(".bingo").innerHTML = bingoDom;

document.querySelectorAll(".case").forEach(mot => {
    mot.addEventListener("click", (e) => {
        if (!e.currentTarget.classList.contains("active")) {
            e.currentTarget.classList.add("active");
            let current = bingo.find(b => b.mot === mot.dataset.mot);
            current.active = true;
            checkLine(current);
        }
    });
});

document.querySelector(".info").addEventListener("click",()=> {
    document.querySelector(".modal").classList.add("show");
})

document.querySelector(".modal-close").addEventListener("click",() => {
    document.querySelector(".modal").classList.remove("show");
})

function checkLine(current){
    let startLine = (current.position - current.position%5);
    let line = true;

    for(i=startLine; i<startLine+5;i++){
        let element = bingo.find(e => e.position === i);
        if(!element.active){
            line = false;
        }
    }
    if(line){
        for(i=startLine; i<startLine+5;i++){
            let element = bingo.find(e => e.position === i);
            document.querySelector(`.case[data-mot="${element.mot}"] .stabilo`).classList.add("line");
        }
    }

    let startCol = current.position%5;
    let col = true;
    for(i=startCol; i<=startCol+20;i+=5){
        let element = bingo.find(e => e.position === i);
        if(!element.active){
            col = false;
        }
    }
    if(col){
        for(i=startCol; i<=startCol+20;i+=5){
            let element = bingo.find(e => e.position === i);
            document.querySelector(`.case[data-mot="${element.mot}"] .stabilo`).classList.add("line");
        }
    }
    let diag1 = true;
    for(i=0;i<25;i+=6){
        let element = bingo.find(e => e.position === i);
        if(!element.active){
            diag1 = false;
        }
    }
    if(diag1){
        for(i=0; i<=25;i+=6){
            let element = bingo.find(e => e.position === i);
            document.querySelector(`.case[data-mot="${element.mot}"] .stabilo`).classList.add("line");
        }
    }
    let diag2 = true;
    for(i=4;i<21;i+=4){
        let element = bingo.find(e => e.position === i);
        if(!element.active){
            diag2 = false;
        }
    }
    if(diag2){
        for(i=4;i<21;i+=4){
            let element = bingo.find(e => e.position === i);
            document.querySelector(`.case[data-mot="${element.mot}"] .stabilo`).classList.add("line");
        }
    }
}