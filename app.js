const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskTxt = input.value.trim();

    if (taskTxt !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskTxt}</span>
            <button class="delete-button">Delete</button>
        `;

        taskList.appendChild(li);

        input.value = '';

        alert('Task added!');

        const deleteBtn = li.querySelector('.delete-button');
        deleteBtn.addEventListener('click', function() {
            li.remove();
            alert('Task deleted!');
        });
    }
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
