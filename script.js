let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let btnCleanup = $('#btnCleanup');
let inpNewTask = $('#inpNewTask');
let btnSort = $('#btnSort');

btnAdd.click(addItem);

btnClear.click(() => inpNewTask.val(''));

inpNewTask.keypress((e) => {
    if (e.which == 13) {
        addItem();
    }
})

function addItem() {
    console.log(inpNewTask.val());

    if (inpNewTask.val() == '') return;

    var listItem = $('<li>', {
        class: 'list-group-item',
        text: inpNewTask.val()
    });

    listItem.click(() => {
        listItem.toggleClass('done');
    })

    ulTasks.append(listItem);

    inpNewTask.val('');
}

function clearDone() {
    $('#ulTasks .done').remove();
}

function sortItems() {
    $('#ulTasks .done').appendTo(ulTasks);
}

btnCleanup.click(clearDone);
btnSort.click(sortItems);
