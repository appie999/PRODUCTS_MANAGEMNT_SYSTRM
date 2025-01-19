
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');




//get total

function getTotal(){
     
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value
        total.innerHTML = result;
        total.style.background ='rgb(3, 145, 31)'
    }else{
        total.innerHTML=''
        total.style.background ='rgb(191, 33, 33)'
    }
}


//create product

let dataProduct;
if(localStorage.product != null){
    dataProduct = JSON.parse(localStorage.product)// tatred array kima kant y3ni mn string l array
}else{
    dataProduct = [];
}


submit.onclick = function(){
    let newProduct = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    dataProduct.push(newProduct);
    //save LocalStorage
    localStorage.setItem('product' , JSON.stringify(dataProduct)) // bach dekhel array f localstorage ==> thwel array l string

    clearData()
    showData()
}



//clear data

function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}



//read

function showData(){
    let table = '';
    for(let i =0 ; i <dataProduct.length ;i++){
        table += `
        <tr>
            <td>${i}</td>
            <td>${dataProduct[i].title}</td>
            <td>${dataProduct[i].price}</td>
            <td>${dataProduct[i].taxes}</td>
            <td>${dataProduct[i].ads}</td>
            <td>${dataProduct[i].discount}</td>
            <td>${dataProduct[i].total}</td>
            <td>${dataProduct[i].category}</td>
            <td><button id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML=table; 
    let btnDelete = document.getElementById('deleteAll');
    if(dataProduct.length>0){
        btnDelete.innerHTML=`
        <button onclick = deleteAll()>delete All </button>
          `
    }else{
        btnDelete.innerHTML='';
    }
}

showData()// bach tb9a khdama had function dima




//delete

function deleteData(i){

    dataProduct.splice(i, 1);
    localStorage.product = JSON.stringify(dataProduct);

    showData()// to update the screen after delete
}

 
//delete All

function deleteAll(){
    localStorage.clear();
    dataProduct.splice(0)
    showData();
}






//count
//update
// search
//clean data
