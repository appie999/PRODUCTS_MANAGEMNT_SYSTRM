
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
//count
//delete
//update
// search
//clean data
