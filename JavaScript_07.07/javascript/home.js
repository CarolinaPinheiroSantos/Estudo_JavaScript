fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((res) => {
        const cardContainer = document.getElementById("card-container");

        res.products.map((produto) => {
            const card = document.createElement("div");
            card.className = "card";
            cardContainer.append(card);

            const image = document.createElement("img");
            image.src = produto.images[0];
            image.alt = "Imagem";
            card.append(image);

            const titulo = document.createElement("h2");
            titulo.innerHTML = produto.title;
            card.append(titulo);
            
            const preco = document.createElement("h3");
            preco.innerHTML = produto.price;
            card.append(preco);
        });
    });

fetch('https://dummyjson.com/products/${id}')
    .then((res) => res.json())