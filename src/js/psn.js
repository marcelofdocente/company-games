let jogos = [
    {
        nome: "God Of War",
        poster: "https://img.elo7.com.br/product/main/38C078F/poster-adesivo-god-of-war-42-5x60cm-desenho.jpg",
    },
    {
        nome: "The last of US",
        poster: "https://static.gamevicio.com/imagens_itens/big/13/the-last-of-us-remastered-cover-012333.webp",
    },
    {
        nome: "Resident Evil",
        poster: "https://img.elo7.com.br/product/main/2530332/big-poster-gamer-resident-evil-4-lo001-tamanho-90x60-cm-jogo.jpg",
    },
    {
        nome: "Marvel's Spider-man",
        poster: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1423/aA2QvyenlBrwV42v9tkXOvae.jpg",
    },
    {
        nome: "Uncharted 4",
        poster: "https://image.api.playstation.com/vulcan/img/rnd/202010/2620/BYDPo5By4M1MYN0401ZDHtA7.png",
    },
    {
        nome: "Horizon Zero Dawn",
        poster: "https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700930/poster-horizon-zero-dawn-25d8f0d3.jpg",
    },
    {
        nome: "Detroit: Become Human poster",
        poster: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/f49f76fdf9e473ec08dd1fd291d1468a.jpg",
    },
    {
        nome: "Warframe",
        poster: "https://images.squarespace-cdn.com/content/v1/53e4ea80e4b0a79b40480ad4/1626862056388-48WBUT10JX0WNL1FLRDR/WARFRAME_2_dan_mumford.jpg?format=1500w",
    },
    {
        nome: "The last of Us part 2",
        poster: "https://cdn.shopify.com/s/files/1/2356/1293/products/TheLastofUsPartIIGamingPoster_800x.jpg?v=1594729606",
    },
    {
        nome: "Bloodborne",
        poster: "https://cdn.europosters.eu/image/750/posters/bloodborne-key-art-i23293.jpg",
    },
     {
        nome: "Red Dead Redemption 2",
        poster: "https://img.elo7.com.br/product/original/262527F/big-poster-gamer-red-dead-redemption-2-lo01-tamanho-90x60-cm-poster-de-games.jpg",
    },
];

const projectDiv = document.getElementById("games");
projectDiv.innerHTML = "";

const cardElems = jogos.map((card) => {
	return `
        <div class="game">
            <img class="poster" src="${card.poster}" alt="${card.nome} poster" title="${card.nome}" />
                <h3>${card.nome}</h3>
                <button><a href="console-Psn.html" style="text-decoration: none; color: white; font-weight: bold;">
                Play Now
                </a>
                </button>
        </div>
    `;
});

projectDiv.innerHTML = cardElems.join("");
