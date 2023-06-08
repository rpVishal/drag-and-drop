const list = document.getElementById('list');
const droppable = document.getElementById('droppable');
const reset = document.getElementById('reset');

list.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.style.opacity = '0.5';
});

droppable.addEventListener('dragover', (event) => {
    event.preventDefault();
    droppable.classList.add('hover');
});

droppable.addEventListener('dragleave', (event) => {
    droppable.classList.remove('hover');
});

droppable.addEventListener('drop', (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const item = document.getElementById(id);
    droppable.appendChild(item);
    droppable.classList.remove('hover');
    item.style.opacity = '1';
    alert('Item dropped!');
});

reset.addEventListener('click', () => {
    droppable.innerHTML = '';
    list.innerHTML = `
    <li class="item" draggable="true">Samsung</li>
    <li class="item" draggable="true">Apple</li>
    <li class="item" draggable="true">Oneplus</li>
  `;
});