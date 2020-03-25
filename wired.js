let requestURL = 'https://200427063.github.io/JSON-Georgin/pizza.json';


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
let plentyPizza = request.response;
console.log(plentyPizza);
pizzaTypes(plentyPizza);

};



function pizzaTypes(jsonObj) {
  let pizzaTypes = jsonObj.pizzaTypes;

  let section = document.querySelector('section');
  for (let i = 0; i< pizzaTypes.length; i++){
//build the new html element on our page
    let article = document.createElement('article');
    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let ul = document.createElement('ul')


    img.setAttribute('src', 'https://200427063.github.io/JSON-Georgin/assets/'
  + pizzaTypes[i].image);
  img.setAttribute('alt', pizzaTypes[i].image);
  h2.textContent = pizzaTypes[i].name;
  p1.textContent = 'size' + pizzaTypes[i].size;
  p2.textContent = 'price' + pizzaTypes[i].price;
  let toppings = pizzaTypes[i].toppings;
  for(let j = 0; j<  toppings.length; j++) {

    let listItem = document.createElement('li');
    listItem.textContent = toppings[j];
    ul.appendChild(listItem);
  }

  article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(ul);
  section .appendChild(article);

  }


}
