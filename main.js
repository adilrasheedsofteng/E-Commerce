async function allProductData() {
  const allData = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  console.log("all data",allData.products);
  allData.products.forEach((item, index) => {
    let product = document.getElementById("cardRow");
    let productTextNode = document.createElement("div");
    let manCard = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardHeading = document.createElement("h5");
    let cardText = document.createElement("p");
    let brandDiv = document.createElement("div");
    let brandText = document.createElement("p");
    let cardBrandBtn = document.createElement("button");
    let productPrice = document.createElement("h6");
    let cardRating = document.createElement("div");
    let cardRating1 = document.createElement("small");
    let cardRating2 = document.createElement("small");
    let cardRating3 = document.createElement("small");
    let cardRating4 = document.createElement("small");
    let cardRating5 = document.createElement("small");
    let hr = document.createElement("hr");
    let lastDiv = document.createElement("div");
    let divBrand = document.createTextNode("Brand");
    let btnAddToCard = document.createElement("button");
    let headingCard = document.createTextNode(item.title);
    let textCard = document.createTextNode(item.description);
    let brandCardBtn = document.createTextNode(item.brand);
    let priceOfProduct = document.createTextNode(`Price:${item.price}`);
    let ratingCard1 = document.createTextNode(item.rating);
    let hrr = document.createTextNode("");
    let addToCardBtn = document.createTextNode("Add to Card");

    productTextNode.setAttribute(
      "class",
      "col-lg-2 col-xl-2 col-md-6 col-sm-6 col-xs-12 p-3 card-col"
    );
    productTextNode.setAttribute("id", "card-col");
    manCard.setAttribute("class", "card customCard");
    cardImage.setAttribute("src", item.thumbnail);
    cardImage.setAttribute(
      "class",
      "card-img-top d-flex align-self-center cardImg"
    );
    cardImage.addEventListener("click", async ()=>{
      let modal = document.getElementById("myModal");
      let modalContent = document.getElementById("modalContent");
      modal.style.display = "block";
      let close = document.createElement("span");
      close.setAttribute("class", "close btn-close");
      close.setAttribute("aria-label", "Close");
      let container = document.createElement("div");
      container.setAttribute("class", "container mt-2");
      let row = document.createElement("div");
      row.setAttribute("class", "row");
      let modals = document.getElementById("modalContent");
      modalContent.appendChild(close);
      close.addEventListener("click", async () => {
      while (modals.firstChild) {
      modals.removeChild(modals.firstChild);
      }
      modal.style.display = "none";
      });
      let manDiv=document.createElement("div");
      manDiv.setAttribute("class","d-flex justify-content-center");
      modalContent.appendChild(manDiv);
      let imageDiv=document.createElement("div");
      let imgTag=document.createElement("img");
      imgTag.setAttribute("src",item.thumbnail);
      imgTag.setAttribute("id","images");
      manDiv.appendChild(imageDiv);
      imageDiv.appendChild(imgTag);
      let manBtnDiv=document.createElement("div");
      manBtnDiv.setAttribute("class","d-flex justify-content-center mt-4");
      modalContent.appendChild(manBtnDiv);
      let zoomInBtn=document.createElement("button");
      zoomInBtn.setAttribute("class","zoomInZoomOut me-5");
      zoomInBtn.addEventListener("click",async()=>{
        let image = document.getElementById('images');
        let width = image.clientWidth;
        let height = image.clientHeight;
        image.style.width = (width + 50) + "px";
        image.style.height = (height + 50) + "px";
      });
      manBtnDiv.appendChild(zoomInBtn);
      let zoomInBtnIcon=document.createElement("i");
      zoomInBtnIcon.setAttribute("class","fa-solid fa-magnifying-glass-plus fa-2x p-1");
      zoomInBtn.appendChild(zoomInBtnIcon);
      let zoomOutBtn=document.createElement("button");
      zoomOutBtn.setAttribute("class","ms-5 zoomInZoomOut");
      zoomOutBtn.addEventListener("click",async()=>{
        let image = document.getElementById('images');
        let width = image.clientWidth;
        let height = image.clientHeight;
        image.style.width = (width - 50) + "px";
        image.style.height = (height - 50) + "px";
      });
      manBtnDiv.appendChild(zoomOutBtn);
      let zoomOutBtnIcon=document.createElement("i");
      zoomOutBtnIcon.setAttribute("class","fa-solid fa-magnifying-glass-minus fa-2x p-1");
      zoomOutBtn.appendChild(zoomOutBtnIcon);
    });
    cardBody.setAttribute("class", "card-body");
    cardHeading.setAttribute("class", "card-title");
    cardHeading.appendChild(headingCard);
    cardText.setAttribute("class", "card-text");
    cardText.appendChild(textCard);
    brandDiv.setAttribute("class", "d-flex");
    brandText.setAttribute("class", "h6");
    cardBrandBtn.setAttribute("class", "h6 cardBrand");
    cardBrandBtn.setAttribute("value", item.brand);
    cardBrandBtn.addEventListener("click", async () => {
      let modal = document.getElementById("myModal");
      let modalContent = document.getElementById("modalContent");
      modal.style.display = "block";
      let val = cardBrandBtn.getAttribute("value");
      const allDataResponse = await fetch(
        "https://dummyjson.com/products"
      ).then((res) => res.json());
      let close = document.createElement("span");
      close.setAttribute("class", "close btn-close");
      close.setAttribute("aria-label", "Close");
      modalContent.appendChild(close);
      close.addEventListener("click", async () => {
        let modals = document.getElementById("modalContent");
        while (modals.firstChild) {
          modals.removeChild(modals.firstChild);
        }
        modal.style.display = "none";
      });
      allDataResponse.products.forEach((item2, index) => {
        if (val == item2.brand) {
          let flexDiv = document.createElement("div");
          let img = document.createElement("img");
          let titalDiv = document.createElement("div");
          let titalHeading = document.createElement("h5");
          let descriptionDiv = document.createElement("div");
          let descriptionDivText = document.createElement("p");
          let brandDiv = document.createElement("div");
          let brandHeading = document.createElement("h5");
          let priceDiv = document.createElement("div");
          let priceHeading = document.createElement("h6");
          let buttonDiv = document.createElement("div");
          let addToCardBtn = document.createElement("button");
          let dataImg = document.createTextNode(item2.thumbnail);
          let headingCard = document.createTextNode(item2.title);
          let textDivDiscription = document.createTextNode(item2.description);
          let headingBrand = document.createTextNode(`Brand:${item2.brand}`);
          let headingPrice = document.createTextNode(`Price:${item2.price}`);
          let divRatingIcon = document.createTextNode(item2.rating);
          let btnAddToCard = document.createTextNode("Add to Card");
          flexDiv.setAttribute(
            "class",
            "d-flex justify-content-start p-1 shadow-lg p-2 mb-3 bg-body rounded"
          );
          descriptionDiv.setAttribute("class", "projectDescription ms-2 mt-3");
          brandDiv.setAttribute("class", "ms-2 mt-3");
          priceDiv.setAttribute("class", "ms-2 mt-3 pt-1");
          buttonDiv.setAttribute("class", "d-flex justify-content-start");
          addToCardBtn.setAttribute("class", "customBtn ms-2 mt-3");
          let countDisplay = document.getElementById("displayCount");
          addToCardBtn.addEventListener("click", async () => {
            addToCardGlobalArray.push(item);
            countDisplay.innerHTML = addToCardGlobalArray.length;
            finalPrice += item.price;
            console.log(finalPrice);
          });
          modalContent.appendChild(flexDiv);
          img.setAttribute("class", "modalImg");
          img.setAttribute("src", item2.thumbnail);
          flexDiv.appendChild(img);
          titalDiv.setAttribute("class", "ms-2 mt-3");
          flexDiv.appendChild(titalDiv);
          titalDiv.appendChild(titalHeading);
          titalHeading.appendChild(headingCard);
          flexDiv.appendChild(descriptionDiv);
          descriptionDiv.appendChild(descriptionDivText);
          descriptionDivText.appendChild(textDivDiscription);
          flexDiv.appendChild(brandDiv);
          brandDiv.appendChild(brandHeading);
          brandHeading.appendChild(headingBrand);
          flexDiv.appendChild(priceDiv);
          priceDiv.appendChild(priceHeading);
          priceHeading.appendChild(headingPrice);
          flexDiv.appendChild(buttonDiv);
          buttonDiv.appendChild(addToCardBtn);
          addToCardBtn.appendChild(btnAddToCard);
        }
      });
    });
    cardRating.setAttribute(
      "class",
      "d-flex align-items-center justify-content-start mb-1"
    );
    cardRating1.setAttribute("class", "fa fa-star text-warning mr-1");
    cardRating1.appendChild(ratingCard1);
    hr.appendChild(hrr);
    lastDiv.setAttribute(
      "class",
      "d-flex align-items-center justify-content-around "
    );
    btnAddToCard.setAttribute("class", "customBtn");

    let countDisplay = document.getElementById("displayCount");
    btnAddToCard.addEventListener("click", async () => {
      addToCardGlobalArray.push(item);
      countDisplay.innerHTML = addToCardGlobalArray.length;
      item.quantity = 1;
      finalPrice += item.price;
      console.log(addToCardGlobalArray, "addToCardGlobalArray");
      console.log(finalPrice);
    });
    btnAddToCard.appendChild(addToCardBtn);

    productTextNode.appendChild(manCard);
    product.append(productTextNode);
    manCard.appendChild(cardImage);
    manCard.appendChild(cardBody);
    cardBody.appendChild(cardHeading);
    cardBody.appendChild(cardText);
    cardBody.appendChild(brandDiv);
    brandDiv.appendChild(brandText);
    brandText.appendChild(divBrand);
    brandDiv.appendChild(cardBrandBtn);
    cardBody.appendChild(productPrice);
    cardBody.appendChild(cardRating);
    cardBody.appendChild(cardRating1);
    cardBody.appendChild(hr);
    cardBody.appendChild(lastDiv);
    lastDiv.appendChild(btnAddToCard);
    cardBrandBtn.appendChild(brandCardBtn);
    productPrice.appendChild(priceOfProduct);
  });
}
allProductData();

let finalPrice = 0;

let addToCardGlobalArray = [];

// Model for Brand Start
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Modal for Brand code End
// Main Add to card code start
let manAddToCard = document.getElementById("addToCardManBtn");
manAddToCard.addEventListener("click", async () => {
  let modal = document.getElementById("myModal");
  let modalContent = document.getElementById("modalContent");
  modal.style.display = "block";

  let close = document.createElement("span");
  close.setAttribute("class", "close btn-close");
  close.setAttribute("aria-label", "Close");
  modalContent.appendChild(close);
  close.addEventListener("click", async () => {
    let modals = document.getElementById("modalContent");
    while (modals.firstChild) {
      modals.removeChild(modals.firstChild);
    }
    modal.style.display = "none";
  });

  addToCardGlobalArray.forEach((item2, index) => {
    let flexDiv = document.createElement("div");
    let img = document.createElement("img");
    let titalDiv = document.createElement("div");
    let titalHeading = document.createElement("h5");
    let descriptionDiv = document.createElement("div");
    let descriptionDivText = document.createElement("p");
    let brandDiv = document.createElement("div");
    let brandHeading = document.createElement("h5");
    let priceDiv = document.createElement("div");
    let priceHeading = document.createElement("h6");
    let addRemoveBtnDiv = document.createElement("div");
    addRemoveBtnDiv.setAttribute("class", "d-flex justify-content-start");
    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "iconBtn");
    removeBtn.addEventListener("click", async () => {
      if (item2.quantity == 1) {
        alert("Quantity should be greater then 0!");
      } else {
        item2.quantity -= 1;
        text.innerHTML = item2.quantity;
        finalPrice -= item2.price;
        if (finalPrice >= 0) {
          const buyNowDiv = document.getElementById("totallPrice");
          buyNowDiv.innerHTML = finalPrice;
        }
      }
    });
    let text = document.createElement("p");
    text.setAttribute("id", "increament");
    text.setAttribute("class", "iconBtn");
    let textNode = document.createTextNode(item2.quantity);
    let plusBtn = document.createElement("button");
    plusBtn.setAttribute("class", "iconBtn");
    plusBtn.addEventListener("click", async () => {
      item2.quantity += 1;
      text.innerHTML = item2.quantity;
      finalPrice += item2.price;
      if (finalPrice >= 0) {
        const buyNowDiv = document.getElementById("totallPrice");
        buyNowDiv.innerHTML = finalPrice;
      }
    });
    let plusSign = document.createElement("i");
    plusSign.setAttribute("class", "fa-solid fa-plus");
    plusBtn.appendChild(plusSign);
    let minus = document.createElement("i");
    minus.setAttribute("class", "fa-solid fa-minus");
    minus.setAttribute("color", "#32373a");
    let dataImg = document.createTextNode(item2.thumbnail);
    let headingCard = document.createTextNode(item2.title);
    let textDivDiscription = document.createTextNode(item2.description);
    let headingBrand = document.createTextNode(`Brand:${item2.brand}`);
    let headingPrice = document.createTextNode(`Price:${item2.price}`);
    flexDiv.setAttribute(
      "class",
      "d-flex justify-content-start p-1 shadow-lg p-2 mb-3 bg-body rounded"
    );
    descriptionDiv.setAttribute("class", "projectDescription ms-2 mt-3");
    brandDiv.setAttribute("class", "ms-2 mt-3");
    priceDiv.setAttribute("class", "ms-2 mt-3 pt-1");
    modalContent.appendChild(flexDiv);
    img.setAttribute("class", "modalImg");
    img.setAttribute("src", item2.thumbnail);
    flexDiv.appendChild(img);
    titalDiv.setAttribute("class", "ms-2 mt-3");
    flexDiv.appendChild(titalDiv);
    titalDiv.appendChild(titalHeading);
    titalHeading.appendChild(headingCard);
    flexDiv.appendChild(descriptionDiv);
    descriptionDiv.appendChild(descriptionDivText);
    descriptionDivText.appendChild(textDivDiscription);
    flexDiv.appendChild(brandDiv);
    brandDiv.appendChild(brandHeading);
    brandHeading.appendChild(headingBrand);
    flexDiv.appendChild(priceDiv);
    flexDiv.appendChild(addRemoveBtnDiv);
    addRemoveBtnDiv.appendChild(removeBtn);
    removeBtn.appendChild(minus);
    addRemoveBtnDiv.appendChild(text);
    text.appendChild(textNode);
    addRemoveBtnDiv.appendChild(plusBtn);
    priceDiv.appendChild(priceHeading);
    priceHeading.appendChild(headingPrice);
  });
  let buyNowDivBtn = document.createElement("div");
  let buyNow = document.createElement("button");
  let totallPrice = document.createElement("div");
  buyNowDivBtn.setAttribute("class", "d-flex");
  totallPrice.setAttribute("class", "showText ms-2");
  totallPrice.setAttribute("id", "totallPrice");
  let totallPriceNode = document.createTextNode(finalPrice);
  let buyNowBtnText = document.createTextNode("Buy Now");
  buyNow.setAttribute("class", "customBtnSecond");
  let t = document.getElementById("totallPrice");
  buyNow.appendChild(buyNowBtnText);
  buyNowDivBtn.appendChild(buyNow);
  buyNowDivBtn.appendChild(totallPrice);
  totallPrice.appendChild(totallPriceNode);
  modalContent.appendChild(buyNowDivBtn);
});

// Main Add to card  code End
// Location code

let map = document.getElementById("location");

map.addEventListener("click", async () => {
  let modal = document.getElementById("myModal");
  let modalContent = document.getElementById("modalContent");
  modal.style.display = "block";
  let close = document.createElement("span");
  close.setAttribute("class", "close btn-close");
  close.setAttribute("aria-label", "Close");
  modalContent.appendChild(close);
  close.addEventListener("click", async () => {
    while (modalContent.firstChild) {
      modalContent.removeChild(modalContent.firstChild);
    }
    modal.style.display = "none";
  });

  let googleMap = document.createElement("iframe");
  googleMap.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14160323.287397046!2d58.36337652163314!3d29.94750933525736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1699538053515!5m2!1sen!2s"
  );
  googleMap.setAttribute("width", "1325");
  googleMap.setAttribute("height", "600");
  googleMap.setAttribute("style", "border:0;");
  googleMap.setAttribute("allowfullscreen", "");
  googleMap.setAttribute("loading", "lazy");
  googleMap.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
  modalContent.appendChild(googleMap);
});

let catgoryBtn = document.getElementById("CategoryBnt");
catgoryBtn.addEventListener("click", async () => {
  console.log("Doing working");
  let listOfProduct = document.getElementById("productList");
  let dataForCatogry = await fetch(
    "https://dummyjson.com/products/categories"
  ).then((res) => res.json());
  // console.log(dataForCatogry);
  dataForCatogry.forEach((item) => {
    let list = document.createElement("li");
    list.setAttribute("class", "nav-item dropdown");
    list.setAttribute("id", "parent");
    let listAncerTag = document.createElement("a");
    listAncerTag.setAttribute("class", "nav-link dropdown-toggle");
    listAncerTag.setAttribute("href", "#");
    listAncerTag.setAttribute("role", "button");
    listAncerTag.setAttribute("data-bs-toggle", "dropdown");
    listAncerTag.setAttribute("aria-expanded", false);
    let dropdown = document.createElement("ul");
    dropdown.setAttribute("class", "dropdown-menu");
    list.appendChild(listAncerTag);
    list.appendChild(dropdown);
    let listTextNode = document.createTextNode(item);
    list.addEventListener("click", async () => {
      const getProductItem = await fetch(
        `https://dummyjson.com/products/category/${item}`
      ).then((res) => res.json());
      dropdown.setAttribute("data-bs-popper", "static");
      let a = listAncerTag.getAttribute("class");
      if (a.includes("show")) {
        console.log(a.includes("show"), "true");
        getProductItem.products.forEach((item2) => {
          let subLi = document.createElement("li");
          let ancer = document.createElement("a");
          ancer.setAttribute("class", "dropdown-item");
          ancer.setAttribute("href", "#");
          let ancerTextNode = document.createTextNode(item2.title);
          dropdown.appendChild(subLi);
          subLi.appendChild(ancer);
          ancer.appendChild(ancerTextNode);
        });
      } else if (!a.includes("show")) {
        console.log("fals");
        let all = document.getElementById("parent");
        // let c=all.querySelectorAll("huja");
        console.log(all.hasChildNodes(), "all");
        console.log(all, "ajhahjsahll");
        let a = all.getElementsByTagName("li");
        // while (a) {
        //   a.remove();
        // }
        console.log(a);
      }
    });
    listOfProduct.appendChild(list);

    listAncerTag.appendChild(listTextNode);
  });
});

// search btn code start
let searchs = document.getElementById("searchs");
let cards = document.getElementById("container_id");
let searchInput = document.getElementById("input_search");
searchs.addEventListener("click", async (event) => {
  event.preventDefault();
  let filter = searchInput.value.toUpperCase();
  let modals = document.getElementById("modalContent");
  console.log(typeof searchInput.value, "input value");
  if (searchInput.value == "") {
    alert("Please enter data for an searching");
  } else if (searchInput.value != "") {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    let close = document.createElement("span");
    close.setAttribute("class", "close btn-close");
    close.setAttribute("aria-label", "Close");
    let container = document.createElement("div");
    container.setAttribute("class", "container mt-2");
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    modalContent.appendChild(close);
    close.addEventListener("click", async () => {
      while (modals.firstChild) {
        modals.removeChild(modals.firstChild);
      }
      modal.style.display = "none";
    });
    let collectData = await fetch("https://dummyjson.com/products").then(
      (res) => res.json()
    );
    const filtered = collectData.products.filter(
      (item) => item.title.toUpperCase().indexOf(filter) > -1
    );
    console.log(filtered, "filtered");
    if (filtered != "") {
      filtered.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute(
          "class",
          "col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-12 p-3"
        );
        let card = document.createElement("div");
        card.setAttribute("class", "card customCard");
        let img = document.createElement("img");
        img.setAttribute("src", item.thumbnail);
        img.setAttribute(
          "class",
          "card-img-top d-flex align-self-center cardImg"
        );
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        let title = document.createElement("h5");
        title.setAttribute("class", "card-title");
        let titleTextNode = document.createTextNode(item.title);
        title.appendChild(titleTextNode);
        let description = document.createElement("p");
        description.setAttribute("class", "card-text");
        let descriptionTextNode = document.createTextNode(item.description);
        description.appendChild(descriptionTextNode);
        let brandNameDiv = document.createElement("div");
        brandNameDiv.setAttribute("class", "d-flex justify-content-start");
        let brand = document.createElement("h5");
        let brandTextNode = document.createTextNode("Brand");
        brand.appendChild(brandTextNode);
        let brandName = document.createElement("button");
        brandName.setAttribute("class", "h6 cardBrand");
        let brandNameTextNode = document.createTextNode(item.brand);
        brandName.appendChild(brandNameTextNode);
        let price = document.createElement("h6");
        let priceTextNode = document.createTextNode(`Price: ${item.price}`);
        price.appendChild(priceTextNode);
        let ratingDiv = document.createElement("div");
        ratingDiv.setAttribute(
          "class",
          "d-flex align-items-center justify-content-start mb-1"
        );
        let rating = document.createElement("small");
        rating.setAttribute("class", "fa fa-star text-warning mr-1");
        ratingDiv.appendChild(rating);
        let ratingNumber = document.createElement("p");
        ratingNumber.setAttribute("class", "text-warning h6 ms-1 mt-2");
        let ratingNumberTextNode = document.createTextNode(item.rating);
        ratingNumber.appendChild(ratingNumberTextNode);
        let hr = document.createElement("hr");
        let hrr = document.createTextNode("");
        hr.appendChild(hrr);
        let buttonDiv = document.createElement("div");
        buttonDiv.setAttribute(
          "class",
          "d-flex align-items-center justify-content-around"
        );
        let addToCard = document.createElement("button");
        addToCard.setAttribute("class", "customBtn");
        let countDisplay = document.getElementById("displayCount");
        addToCard.addEventListener("click", async () => {
          addToCardGlobalArray.push(item);
          countDisplay.innerHTML = addToCardGlobalArray.length;
          finalPrice += item.price;
          console.log(addToCardGlobalArray);
        });
        let addToCardTextNode = document.createTextNode("Add to Card");
        addToCard.appendChild(addToCardTextNode);
        modals.appendChild(container);
        container.appendChild(row);
        row.appendChild(div);
        div.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(brandNameDiv);
        brandNameDiv.appendChild(brand);
        brandNameDiv.appendChild(brandName);
        cardBody.appendChild(price);
        cardBody.appendChild(ratingDiv);
        ratingDiv.appendChild(ratingNumber);
        cardBody.appendChild(hr);
        cardBody.appendChild(addToCard);
      });
    } else {
      let text = document.createElement("p");
      text.setAttribute("class", "d-flex  justify-content-center");
      let textNode = document.createTextNode("Data is not available!");
      text.appendChild(textNode);
      modals.appendChild(text);
    }
  }
});

// search btn code end

// Best Deals showing
let deal = document.getElementById("deals");
deal.addEventListener("click", async () => {
  let modal = document.getElementById("myModal");
  let modalContent = document.getElementById("modalContent");
  modal.style.display = "block";
  let close = document.createElement("span");
  close.setAttribute("class", "close btn-close");
  close.setAttribute("aria-label", "Close");
  let container = document.createElement("div");
  container.setAttribute("class", "container mt-2");
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  let modals = document.getElementById("modalContent");
  modalContent.appendChild(close);
  close.addEventListener("click", async () => {
    while (modals.firstChild) {
      modals.removeChild(modals.firstChild);
    }
    modal.style.display = "none";
  });
  let dataDeals = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  dataDeals.products.forEach((item, index) => {
    if (item.price <= 1000) {
      let div = document.createElement("div");
      div.setAttribute(
        "class",
        "col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-12 p-3"
      );
      let card = document.createElement("div");
      card.setAttribute("class", "card customCard");
      let img = document.createElement("img");
      img.setAttribute("src", item.thumbnail);
      img.setAttribute(
        "class",
        "card-img-top d-flex align-self-center cardImg"
      );
      let cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      let title = document.createElement("h5");
      title.setAttribute("class", "card-title");
      let titleTextNode = document.createTextNode(item.title);
      title.appendChild(titleTextNode);
      let description = document.createElement("p");
      description.setAttribute("class", "card-text");
      let descriptionTextNode = document.createTextNode(item.description);
      description.appendChild(descriptionTextNode);
      let brandNameDiv = document.createElement("div");
      brandNameDiv.setAttribute("class", "d-flex justify-content-start");
      let brand = document.createElement("h5");
      let brandTextNode = document.createTextNode("Brand");
      brand.appendChild(brandTextNode);
      let brandName = document.createElement("h5");
      brandName.setAttribute("class", "ms-1");
      let brandNameTextNode = document.createTextNode(item.brand);
      brandName.appendChild(brandNameTextNode);
      let price = document.createElement("h6");
      let priceTextNode = document.createTextNode(`Price: ${item.price}`);
      price.appendChild(priceTextNode);
      let ratingDiv = document.createElement("div");
      ratingDiv.setAttribute(
        "class",
        "d-flex align-items-center justify-content-start mb-1"
      );
      let rating = document.createElement("small");
      rating.setAttribute("class", "fa fa-star text-warning mr-1");
      ratingDiv.appendChild(rating);
      let ratingNumber = document.createElement("p");
      ratingNumber.setAttribute("class", "text-warning h6 ms-1 mt-2");
      let ratingNumberTextNode = document.createTextNode(item.rating);
      ratingNumber.appendChild(ratingNumberTextNode);
      let hr = document.createElement("hr");
      let hrr = document.createTextNode("");
      hr.appendChild(hrr);
      let buttonDiv = document.createElement("div");
      buttonDiv.setAttribute(
        "class",
        "d-flex align-items-center justify-content-around"
      );
      let addToCard = document.createElement("button");
      addToCard.setAttribute("class", "customBtn");
      let countDisplay = document.getElementById("displayCount");
      addToCard.addEventListener("click", async () => {
        addToCardGlobalArray.push(item);
        countDisplay.innerHTML = addToCardGlobalArray.length;
        finalPrice += item.price;
        console.log(addToCardGlobalArray);
      });
      let addToCardTextNode = document.createTextNode("Add to Card");
      addToCard.appendChild(addToCardTextNode);
      modals.appendChild(container);
      container.appendChild(row);
      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardBody);
      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(brandNameDiv);
      brandNameDiv.appendChild(brand);
      brandNameDiv.appendChild(brandName);
      cardBody.appendChild(price);
      cardBody.appendChild(ratingDiv);
      ratingDiv.appendChild(ratingNumber);
      cardBody.appendChild(hr);
      cardBody.appendChild(addToCard);
    }
  });
});



// let image = document.getElementById('images');
      // function ZoomIn() {
      //    let width = image.clientWidth;
      //    let height = image.clientHeight;
      //    image.style.width = (width + 50) + "px";
      //    image.style.height = (height + 50) + "px";
      // }
      // function ZoomOut() {
      //    let width = image.clientWidth;
      //    let height = image.clientHeight;
      //    image.style.width = (width - 50) + "px";
      //    image.style.height = (height - 50) + "px";
      // }
      // https://totootechnology-001-site1.itempurl.com/api/


      // 'https://totootechnology-001-site1.itempurl.com/api/'
  // https://totootechnology-001-site1.itempurl.com/api/
     
    
  //    async function allNewData(){
  //       const allNewData = await fetch("https://totootechnology-001-site1.itempurl.com/api/").then((rese) =>
  //   rese.json()
  // );
  // console.log("all new  data",allNewData);
  //     }
  //     allNewData(); 

  async function fetchAllNewData() {
    try {
      const allNewData = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((response) =>
        response.json()
      );
      console.log("all new data", allNewData);
    } catch (error) {
      console.error("Error fetching data:");
    }
  }
  
  fetchAllNewData();
  
