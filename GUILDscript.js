var products = [
  {productId:1, productName: 'Товар 1', categoryId:1},
  {productId:2, productName: 'Товар 2', categoryId:2},
  {productId:3, productName: 'Товар 3', categoryId:3},
  {productId:4, productName: 'Товар 4', categoryId:4},
  {productId:5, productName: 'Товар 5', categoryId:5},
  {productId:6, productName: 'Товар 6', categoryId:1},
  {productId:7, productName: 'Товар 7', categoryId:2},
  {productId:8, productName: 'Товар 8', categoryId:3},
  {productId:9, productName: 'Товар 9', categoryId:4},
  {productId:10, productName: 'Товар 10', categoryId:5},
  {productId:11, productName: 'Товар 11', categoryId:1},
  {productId:12, productName: 'Товар 12', categoryId:2},
  {productId:13, productName: 'Товар 13', categoryId:3},
  {productId:14, productName: 'Товар 14', categoryId:4},
  {productId:15, productName: 'Товар 15', categoryId:5},
  {productId:16, productName: 'Товар 16', categoryId:1},
  {productId:17, productName: 'Товар 17', categoryId:2},
  {productId:18, productName: 'Товар 18', categoryId:3},
  {productId:19, productName: 'Товар 19', categoryId:4},
  {productId:20, productName: 'Товар 20', categoryId:5},
  {productId:21, productName: 'Товар 21', categoryId:1},
  {productId:22, productName: 'Товар 22', categoryId:2},
  {productId:23, productName: 'Товар 23', categoryId:3},
  {productId:24, productName: 'Товар 24', categoryId:4},
  {productId:25, productName: 'Товар 25', categoryId:5},
];

var categories = [
  {categoryId:1, categoryName: 'Футболки'},
  {categoryId:2, categoryName: 'Майки'},
  {categoryId:3, categoryName: 'Носки'},
  {categoryId:4, categoryName: 'Джинсы'},
  {categoryId:5, categoryName: 'Брюки'},
];

class Shop {
  constructor(className, products, categories) {
    this.products = products;
    this.categories = categories;
    this.app = document.querySelector(`${className}`);  
    this.currentPage = 1;  
  };

  makeNav() {
    let nav = document.createElement("div");
    nav.classList.add("app__nav");
    this.app.insertAdjacentElement("afterbegin", nav);
  };

  makeNavLinks() {
    let nav = document.querySelector(".app__nav")
    for (let i = 0; i < this.categories.length; i++) {
      let link = document.createElement("div");
      link.classList.add("app__link");
      link.innerHTML = `${this.categories[i].categoryName}`;
      link.setAttribute("data-id", this.categories[i].categoryId); 
      if (i == 0) {
        link.classList.add("app__link_active");
      };   
      nav.append(link);
    };
  };

  makeContent() {
    let content = document.createElement("div");
    content.classList.add("app__content");
    this.app.append(content);
  };

  makeProductCard(text) {
    let content = document.querySelector(".app__content");
    let card = document.createElement("div");
    card.classList.add("app__product-card");
    let productImg = document.createElement("div");
    productImg.innerHTML = '<img class="app__product-img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="product image">';
    card.append(productImg);
    let productName = document.createElement("div");
    productName.classList.add("app__product-name");
    productName.innerHTML = text;
    card.append(productName);
    content.append(card);
  };

  makeNavListner() {
    let content = document.querySelector(".app__content");
    let navItem = document.querySelectorAll(".app__link");    
    for (var item of navItem) {
      item.addEventListener ("click", (event) => {
        content.innerHTML = "";
        for(let i = 0; i < navItem.length; i++) {
          navItem[i].classList.remove("app__link_active");
        };
        event.target.classList.add("app__link_active"); 
        this.currentPage = event.target.getAttribute("data-id");
        this.setPage();
      });
    };
  };

  setPage() {    
      for (let j = 0; j < this.products.length; j++) {
        if (this.products[j].categoryId === +this.currentPage) {
          this.makeProductCard(this.products[j].productName);
        };
      };    
  };

  init() {
    this.makeNav();
    this.makeNavLinks();
    this.makeContent();
    this.makeNavListner();
    this.setPage();
  };
};

var myShop = new Shop(".shop", products, categories);
myShop.init();