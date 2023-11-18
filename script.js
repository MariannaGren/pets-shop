const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];





const title = document.querySelector('h1');
const description = document.querySelector('p');
const img = document.querySelector('img');
const price = document.querySelector('.price');
const tags = document.querySelector('.tags');
const itemTemplate = document.querySelector('#item-template');
const shopItems = document.querySelector('#shop-items');
const button = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const nothingFound = document.querySelector('#nothing-found');


function makeProductСard(title, description, price, tags, img) {

    const card = itemTemplate.content.cloneNode(true);
    card.querySelector('h1').textContent = title;
    card.querySelector('p').textContent = description;
    card.querySelector('img').src = img;
    card.querySelector('.price').textContent = price;
    card.querySelector('.tags').textContent = tags;
    return card;
}

items.forEach(function(item) {
    const finalCard = makeProductСard(item.title, item.description, item.price, item.tags, item.img);
    shopItems.append(finalCard)
});



button.addEventListener('click', function() {
    const searchText = searchInput.value.trim().toLowerCase()
    const searchElement = items.filter((el) => el.title.trim().toLowerCase().includes(searchText));
    nothingFound.textContent = "";
    shopItems.innerHTML = '';
    if (searchElement == "") {
        nothingFound.textContent = "Ничего не найдено";
    } else {
        searchElement.forEach(function(item) {
            let card = makeProductСard(item.title, item.description, item.tags, item.price, item.img);
            shopItems.append(card);
        });
    }

});