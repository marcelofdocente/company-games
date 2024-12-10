let jogos = [
    {
        nome: "Assassin's Creed",
        poster: "https://img.elo7.com.br/product/zoom/256E489/big-poster-gamer-assassins-creed-rogue-lo03-tamanho-90x60-cm-nerd.jpg",
    },
    {
        nome: "Batman Arkham knight",
        poster: "https://rukminim1.flixcart.com/image/416/416/xif0q/poster/a/b/5/small-poster-batman-arkham-knight-sl-15392-wall-poster-13x19-original-imaghusn263dcuyh.jpeg?q=70",
    },
    {
        nome: "Apex legends",
        poster: "https://m.media-amazon.com/images/M/MV5BOTlhMTdiY2YtOTI3My00Y2M5LWI5YWQtYzgyYzgzMzhlMzExXkEyXkFqcGdeQXVyMzM2MzI5MzU@._V1_.jpg",
    },
    {
        nome: "Forza Horizon 5",
        poster: "https://picfiles.alphacoders.com/479/thumb-479583.jpg",
    },
    {
        nome: "Halo",
        poster: "https://m.media-amazon.com/images/I/51JiRS7sXTL._SX373_BO1,204,203,200_.jpg",
    },
    {
        nome: "Sea of Thieves",
        poster: "https://m.media-amazon.com/images/I/51IFiNMRi-L.jpg",
    },
    {
        nome: "Call of duty",
        poster: "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Warzone.jpg",
    },
    {
        nome: "Injustice 2",
        poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1xym.jpg",
    },
    {
        nome: "Hades",
        poster: "https://cdn1.epicgames.com/min/offer/1200x1600-1200x1600-e92fa6b99bb20c9edee19c361b8853b9.jpg",
    },
    {
        nome: "Multiversus",
        poster: "https://assets.mycast.io/posters/new-stages-for-multiversus-fan-casting-poster-222036-large.jpg?1659323791",
    },
    {
        nome: "Minecraft",
        poster: "https://img.elo7.com.br/product/main/38C056C/poster-adesivo-minecraft-42-5x60cm-cartaz.jpg",
    }
];

const projectDiv = document.getElementById("games");
projectDiv.innerHTML = "";

const cardElems = jogos.map((card) => {
	return `
        <div class="game">
            <img class="poster" src="${card.poster}" alt="${card.nome} poster" title="${card.nome}" />
                <h3>${card.nome}</h3>
                <button><a href="console-Xbox.html" style="text-decoration: none; color: white; font-weight: bold;">
                Play Now
                </a>
                </button>
        </div>
    `;
});

projectDiv.innerHTML = cardElems.join("");
