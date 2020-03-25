let requestURL = 'https://200427063.github.io/Lab4/wired.json';


//create new XHR
let request = new XMLHttpRequest();

//open new request
request.open('GET', requestURL);

// request Types
request.responseType = 'json';
// send the request using send

request.send();

// wait for the request to be returned , store responce i na variables,
//invoke pizzaTypes function with pizzatypes

request.onload = function() {
let products = request.response;
console.log(products);
producttypes(products);

};



function producttypes(jsonObj) {
  let producttypes = jsonObj.producttypes;

  let div = document.querySelector('div');
  for (let i = 0; i< producttypes.length; i++){
//build the new html element on our page
    let article = document.createElement('article');
    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let ul = document.createElement('ul')


    img.setAttribute('src', 'https://200427063.github.io/Lab4/assets/'
  + producttypes[i].image);
  img.setAttribute('alt', producttypes[i].image);
  h2.textContent = producttypes[i].name;
  p1.textContent = 'price : ' + producttypes[i].price;
  p2.textContent = 'details : ' + producttypes[i].details;
  function my() {
    p2.document.getElementById("details").innerHTML = + producttypes[i].details;
  }

  article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(ul);
  div .appendChild(article);

  }


}
