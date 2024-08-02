    let maps = document.querySelector("#locations");
    console.log(maps);
    maps.addEventListener("click",async () => {
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

    
    let submitBtn=document.getElementById("submit");
    let array=[];
    // let newArrat=[]
      submitBtn.addEventListener("click",async(event)=>{
        event.preventDefault();
        let productId=document.getElementById("productId").value;
        let product_title=document.getElementById("product_title").value;
        let productDescription=document.getElementById("descriptions").value;
        let productBrand=document.getElementById("productBrand").value;
        let productPrice=document.getElementById("productPrice").value;
        let productRating=document.getElementById("productRating").value;
        // let productImage=document.getElementById("productImage").value;
        let obj={id:Number(productId),title:product_title,description:productDescription,brand:productBrand,price:productPrice,rating:productRating};
       
        if(productId==""||product_title==""||productDescription==""||productBrand==""||productPrice==""||productRating==""){
          alert("Please inset data befor submitting");
        }else{
          array.push(obj);
        let string = JSON.stringify(array);
        let retString = localStorage.getItem("products"); 
        localStorage.setItem("products", string);
        let retArray = JSON.parse(retString);
        retArray.push(obj);
        let stringArray=JSON.stringify(retArray);
        let retStringArray=localStorage.getItem("products");
        localStorage.setItem("products",stringArray);
        let arr=JSON.parse(retStringArray);
    }
      productId='';
      product_title='';
      productDescription='';
      productBrand='';
      productPrice='';
      productRating='';

    });
    
  let items=localStorage.getItem("products");
  let localStorageArray=JSON.parse(items);
    localStorageArray.forEach((item)=>{
      let localData=document.getElementById("localData");
      let flexDiv=document.createElement("div");
      flexDiv.setAttribute("class","d-flex justify-content-start p-1 shadow-lg p-2 mb-3 bg-body rounded m-3");
      let img=document.createElement("img");
      img.setAttribute("class","productImg");
      let titleDiv=document.createElement("div");
      titleDiv.setAttribute("class","ms-2 align-self-center")
      let titleHeading=document.createElement("h5");
      let titleHeadingText=document.createTextNode(item.title);
      titleDiv.appendChild(titleHeading);
      titleHeading.appendChild(titleHeadingText);
      let descriptionDiv=document.createElement("div");
      descriptionDiv.setAttribute("class"," ms-2 mt-2 align-self-center")
      let descriptionPra=document.createElement("p");
      let descriptionPraText=document.createTextNode(item.description);
      let brandDiv=document.createElement("div");
      brandDiv.setAttribute("class","ms-2 align-self-center");
      let brandHeading=document.createElement("h5");
      let brandText=document.createTextNode(`Brand: ${item.brand}`);
      brandDiv.appendChild(brandHeading);
      brandHeading.appendChild(brandText);
      let priceDiv=document.createElement("div");
      priceDiv.setAttribute("class","ms-2 align-self-center")
      let priveHeading=document.createElement("h6");
      let priveHeadingText=document.createTextNode(`Price: ${item.price}`);
      priceDiv.appendChild(priveHeading);
      priveHeading.appendChild(priveHeadingText);
      let buttonDiv=document.createElement("div");
      buttonDiv.setAttribute("class","ms-2 d-flex align-self-center")
      let deleteButton=document.createElement("button");
      deleteButton.setAttribute("class","customBtns ms-2");
      let deleteButtonText=document.createTextNode("Delete");
      buttonDiv.appendChild(deleteButton);
      deleteButton.appendChild(deleteButtonText);
      let editButton=document.createElement("button");
      editButton.setAttribute("class","customBtns ms-2");
      let editButtonText=document.createTextNode("Edit");
      buttonDiv.appendChild(editButton);
      editButton.appendChild(editButtonText);
      flexDiv.appendChild(img);
      flexDiv.appendChild(titleDiv);
      flexDiv.appendChild(descriptionDiv);
      descriptionDiv.appendChild(descriptionPra);
      descriptionPra.appendChild(descriptionPraText)
      flexDiv.appendChild(brandDiv);
      flexDiv.appendChild(priceDiv);
      flexDiv.appendChild(buttonDiv);
      localData.appendChild(flexDiv);
    })