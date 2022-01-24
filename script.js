let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let inpNewTask = $('#inpNewTask');

btnAdd.click(addItem);

btnClear.click(() => inpNewTask.val(''));

inpNewTask.keypress((e) => {
    if (e.which == 13) {
        addItem();
    }
})

function addItem() {
    console.log(inpNewTask.val());

    var listItem = $('<li>', {
        class: 'list-group-item',
        text: inpNewTask.val()
    });

    ulTasks.append(listItem);

    inpNewTask.val('');
}

