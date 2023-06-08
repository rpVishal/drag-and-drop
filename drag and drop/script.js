const list = document.getElementById('list');
const droppable = document.getElementById('droppable');
const reset = document.getElementById('reset');
//adding events for the drag and drop control

//this event is used when we start dragging
list.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.style.opacity = '0.5';
});
//this is used when we chooses and lift the item to be dropped
droppable.addEventListener('dragover', (event) => {
    event.preventDefault();
    droppable.classList.add('hover');
});
//this event is called when the dragged item is dropping
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
//added event for the reset button to reset the drag and drop boxes
reset.addEventListener('click', () => {
    droppable.innerHTML = '';
    list.innerHTML = `
    <li class="item" draggable="true">Samsung</li>
    <li class="item" draggable="true">Apple</li>
    <li class="item" draggable="true">Oneplus</li>
  `;
});