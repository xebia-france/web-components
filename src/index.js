import './index.css';

// create user card class
// create user card class
class UserCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var image = document.createElement('img');
    image.src = 'https://semantic-ui.com/images/avatar2/large/patrick.png';
    image.classList.add('image');

    var container = document.createElement('div');
    container.classList.add('container');

    var name = document.createElement('p');
    name.classList.add('name');
    name.innerText = 'User Name';

    var email = document.createElement('p');
    email.classList.add('email');
    email.innerText = 'john.doe@some-email.com';

    var button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Follow John';

    container.append(name, email, button);

    this.append(image, container);
  }
}

// define user card element
customElements.define('user-card', UserCard);


// perform DOM operations
var isVisible = false;

// container element
var containerElem = document.getElementById('container');

// toggle user-card element
document.getElementById('toggleCard').addEventListener('click', function () {
  if (!isVisible) {
    var userCard = document.createElement('user-card');
    userCard.id = 'userCard';
    userCard.innerText = 'Hello World';
    containerElem.appendChild(userCard);
    isVisible = true;
  } else {
    containerElem.innerHTML = "";
    isVisible = false;
  }
});

// toggle user-card attribute
document.getElementById('toggleAttr').addEventListener('click', function () {
  var userCard = document.getElementById('userCard');

  if (!userCard) return;

  if (userCard.hasAttribute('name')) {
    userCard.removeAttribute('name');
  } else {
    userCard.setAttribute('name', 'John');
  }
});

// change user-card attribute value
document.getElementById('changeAttrVal').addEventListener('click', function () {
  var userCard = document.getElementById('userCard');

  if (!userCard) return;

  if (userCard.hasAttribute('name')) {
    userCard.setAttribute('name', 'Mike');
  }
});