fetch('https://dummyjson.com/products/1')
    .then((res) => res.json())
    .then((produto) => {
        const products = document.getElementById("products");
        products.className = "products";

        const image = document.createElement("img");
        image.src = produto.images[0];
        products.append(image)

        const titulo = document.createElement("h2");
        titulo.innerHTML = produto.title;
        products.append(titulo)

        const preco = document.createElement("h3");
        preco.innerHTML = produto.price;
        products.append(preco)
    });