$(document).ready(onReady);

function onReady(){
    console.log('Ready');

    $(document).on('click', '#submit', addToForm);
    $(document).on('click', '#deleteButton', deleteInput);
}

function deleteInput(){
    $(this).parent().remove();
}

function addToForm(){
    let inputFirstName = $('#firstName').val();
    let inputLastName = $('#lastName').val();
    let inputId = $('#inputId').val();
    let inputTitle = $('#title').val();
    let inputAnnualSalary = $('#annualSalary').val();
    //console.log(inputFirstName, inputLastName, inputId, inputTitle, inputAnnualSalary)

    //Append input to form
    $('form').append(`
        <label><br>
            ${inputFirstName}
            ${inputLastName}
            ${inputId}
            ${inputTitle}
            ${inputAnnualSalary}
            <button class="deleteButton">Delete</button>
        </label>

    `)


    let addMonthly = 0;
    addMonthly = addMonthly + parseInt(inputAnnualSalary);
    console.log(addMonthly);

    //Clear input
    $('#firstName').val('');
    $('#lastName').val('');
    $('#inputId').val('');
    $('#title').val('');
    $('#annualSalary').val('');


    
    //totalMonthly();
}

/*
function totalMonthly(){
    let addMonthly = 0;
    addMonthly = addMonthly + parseInt(inputAnnualSalary);
    console.log(addMonthly);
}
*/
