$(document).ready(onReady);

function onReady(){
    console.log('Ready');

    $(document).on('click', '#submit', addToForm)
}

function addToForm(){
    console.log('Button works');

    let inputFirstName = $('#firstName').val();
    let inputLastName = $('#lastName').val();
    let inputId = $('#inputId').val();
    let inputTitle = $('#title').val();
    let inputAnnualSalary = $('#annualSalary').val();
    console.log(inputFirstName, inputLastName, inputId, inputTitle, inputAnnualSalary)

    $('form').append(`
        <label><br>
            ${inputFirstName}
            ${inputLastName}
            ${inputId}
            ${inputTitle}
            ${inputAnnualSalary}
        </label>
    `)
}