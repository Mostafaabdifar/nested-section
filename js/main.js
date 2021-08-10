let mainSection = document.querySelector('.main');
let temp = 2;
let parentId = 1;
let childId = 0;
document.querySelector('.parent-id').innerHTML = `Parent-id : ${parentId}`;
document.querySelector('.child-id').innerHTML = `Child-id : ${childId}`;

function addChild(el) {
  let section = document.createElement('section');
  section.classList.add('main');
  section.setAttribute("id", temp);
  section.innerHTML = `<h4 class="parent-id">parent-id : ${el} </h4>
  <h4 class="child-id">child-id : ${temp} </h4>
  <button class="plus" onclick="addChild(${temp})">+</button>
  <button class="subtract" onclick="removeChild(${temp})">-</button>`;
  document.getElementById(el).appendChild(section);
  temp++;
 
}
function removeChild() {
  
}

