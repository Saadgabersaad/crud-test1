var pNameInput = document.getElementById("productName");
var pPriceInput = document.getElementById("productPrice");
var pCategoryInput = document.getElementById("productCategory");
var pDescInput = document.getElementById("productDescription");
var row = document.getElementById("rowData");
pList = [];

//!! button onclick="addProduct()"

function addProduct() {
  if (pNameInput.value == "" || pPriceInput.value == "") return;

  var Product = {
    name: pNameInput.value,
    price: pPriceInput.value,
    category: pCategoryInput.value,
    Desc: pDescInput.value,
  };
  pList.push(Product);
  // clearInputs();
  displayProduct();
  console.log(pList);
}

// !! Clear Inputs fn
function clearInputs() {
  pNameInput.value = "";
  pPriceInput.value = "";
  pCategoryInput.value = "";
  pDescInput.value = "";
}

// !!!! Dsiplay Pdt
function displayProduct() {
  var cartona = "";

  for (let i = 0; i < pList.length; i++) {
    cartona += ` <div class="col-md-4 my-4">
        <div class="inner rounded-3 overflow-hidden">
          <img src="4.jpg" class="w-100 mb-3" alt="">
          <span class="badge  text-danger-emphasis text-bg-dark fs-4 p-2 mb-3">${pList[0].price}$</span>
          <h2 class="mb-3 ">${pList[0].name}</h2>
          <span class="mb-3 badge bg-info ">${pList[0].category}</span>
          <p class="mb-3">${pList[0].Desc}</p>
          <button class="btn btn-outline-warning w-100 mb-2">Update</button>
          <button onclick='deleteProduct()'  class="btn  btn-outline-danger w-100 mb-2">Delete</button>
        </div>
      </div>`;
    }
    row.innerHTML = cartona;
}

function deleteProduct() {
  pList.splice(0, 1)
  displayProduct()
  
}
