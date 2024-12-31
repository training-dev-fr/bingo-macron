const mots = [
    "sans précédent ",
    "inedit",
    "mayotte",
    "ensemble",
    "gouvernement",
    "république ",
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
    "serrer la ceinture ",
    "difficile ",
    "crise",
    "europe",
    "mondial",
    "conflit",
    "solution ",
    "pardon",
    "capacité ",
    "nourrir",
    "mobiliser",
    "budget",
    "epoque",
    "extrême ",
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
    "gauche ",
    "accord",
    "union",
    "compromis",
    "avancer",
    "futur",
    "négociation ",
    "partenaire",
    "passer",
    "drame",
    "manifestation",
    "rassemblement ",
    "pomice",
    "éducation ",
    "santé ",
    "hospital ",
    "covid",
    "engagement ",
    "mobilisation ",
    "territoire",
    "campagne",
    "province",
    "populaire ",
    "dommage",
    "travail",
    "oublie",
    "compris",
    "compliqué ",
    "catastrophe",
    "résolution ",
    " persistance ",
    "persévérance ",
    "desastre",
    "démocratie ",
    "comprendre",
    "effort",
    "commun",
    "participation ",
    "piste",
    "voir",
    "profiter",
    "immigration ",
    "mort",
    "americain",
    "Conséquences ",
    "étranger ",
    "saison",
    "erreur",
    "siecle",
    "aire",
    "année ",
    "avancée ",
    "respect",
    "loi",
    "note",
    "technologie",
    "entraide",
    "gilet jaune",
    "palestine",
    "israel",
    "ukraine",
    "rencontre ",
    "confession",
    "collectif",
    "soutien",
    "sécurité ",
    "outre mer",
    "inflation ",
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
    bingoDom += `<div class="case">
        <div class="stabilo">${mot}</div>
    </div>`;
})

document.querySelector(".bingo").innerHTML = bingoDom;

document.querySelectorAll(".case").forEach(mot => {
    mot.addEventListener("click", (e) => {
        if (!e.currentTarget.classList.contains("active")) {
            e.currentTarget.classList.add("active");
        }
    });
});

document.querySelector(".info").addEventListener("click",()=> {
    document.querySelector(".modal").classList.add("show");
})

document.querySelector(".modal-close").addEventListener("click",() => {
    document.querySelector(".modal").classList.remove("show");
})