function Donator(name, amount, age) {
  this.name = name;
  this.amount = amount;
  this.age = age;

  Donator.donators.push(this);
}
Donator.donators = [];

const generateRandomAge = () => {
  return Math.floor(Math.random() * (60 - 20 + 1) + 20);
};

let form = document.getElementById('form');
let donatorName = document.getElementById('name');
let donationAmount = document.getElementById('amount');

form.onsubmit = function addDonation(e) {
  e.preventDefault();
  let name = donatorName.value;
  let amount = JSON.parse(donationAmount.value);
  let age = generateRandomAge();
  new Donator(name, amount, age);
  localStorage.setItem('donators', JSON.stringify(Donator.donators));
  addStorage();
};

function addStorage() {
  localStorage.setItem('donators', JSON.stringify(Donator.donators));
}
// addStorage();
let table = document.getElementById('table');
let generateTableBody = function () {
  for (let i = 0; i < localStorage.getItem('donators').length; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td1.innerText = localStorage.getItem('donators')[i].name;
    td2.innerText = localStorage.getItem('donators')[i].amount;
    td3.innerText = localStorage.getItem('donators')[i].age;
  }
};
generateTableBody();
function updateStorage() {
  let data = JSON.parse(localStorage.getItem('donators'));
  Donator.donators = data;
}
updateStorage();

let clear = document.getElementById('clear');
clear.onclick = function () {
  table.clear();
  localStorage('donators').clear();
};
