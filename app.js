let donators = [];
function Donator(name, amount, age) {
  this.name = name;
  this.amount = amount;
  this.age = age;
  donators.push(this);
}
function randomAge() {
  return Math.floor(Math.random() * (60 - 20 + 1) + 20);
}

let form = document.getElementById('form');
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let amount = JSON.parse(e.target.amounts.value);
  let age = randomAge();
  let newDonator = new Donator(name, amount, age);
  newDonator.renderBody();
  createStorage();
}
function createStorage() {
  localStorage.setItem('donators', JSON.stringify(donators));
}
function getStorage() {
  let data = JSON.parse(localStorage.getItem('donators'));
  if (data !== null) {
    for (let i = 0; i < data.length; i++) {
      new Donator(data[i].name, data[i].age, data[i].age);
    }
  }
}
getStorage();

let table = document.getElementById('table');
Donator.prototype.renderBody = function () {
  let tr = document.createElement('tr');
  table.appendChild(tr);

  let td1 = document.createElement('td');
  td1.innerText = this.name;
  tr.appendChild(td1);

  let td2 = document.createElement('td');
  td2.innerText = this.amount;
  tr.appendChild(td2);

  let td3 = document.createElement('td');
  td3.innerText = this.age;
  tr.appendChild(td3);
};
donators.forEach(donator => {
  donator.renderBody();
});

let btnClear = document.getElementById('btn-clear');
btnClear.addEventListener('click', clearAll);
function clearAll() {
  localStorage.clear('donators');
  location.reload();
}
