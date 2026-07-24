const imgs = [
    "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10349/racas-de-cachorro-golden-retriever-cpt11.jpg",
    "https://inovaveterinaria.com.br/wp-content/uploads/2015/04/gato-sem-raca-INOVA-scaled.jpg",
    "https://ogimg.infoglobo.com.br/in/13511948-4dc-041/FT1086A/Macaca_nigra_self-portrait.jpg",
    "./srcs/nicolas.jpg"
];

const unreveal = "https://static.kiaga.com.br/public/kiaga/imagens/produtos/ponto-de-interrogacao-decorativo-em-mdf-laqueado-6mm-73001.jpg"

const divGame = document.getElementById("game");
const reveals = []
let revealCount = 0;

function shuffle(items) {
    const deck = [...items];

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
}

function onReveal(event) {
    event.target.src = event.target.dataset.src;
    reveals.push(event.target);
    afterReveal();
}

function afterReveal() {
    if (reveals.length === 2) {
        setTimeout(() => {
            if (reveals[0].src === reveals[1].src) {
            alert("Match!");
            revealCount++;
        }
        else {
            alert("No match!");
            for (const reveal of reveals) {
                reveal.src = unreveal;
            }
        }
        reveals.length = 0;
        }, 100);
    }

    if (revealCount === imgs.length) {
        alert("You won!");
    }
}

const baralho = shuffle([...imgs, ...imgs]);

baralho.forEach((src, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = unreveal;
    img.alt = `Imagem ${index + 1}`;
    img.dataset.src = src;
    img.addEventListener("click", onReveal);
    img.classList.add("card-img");

    card.appendChild(img);
    divGame.appendChild(card);
});
