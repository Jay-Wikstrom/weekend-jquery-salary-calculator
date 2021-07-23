$(document).ready(onReady);

let totalPerMonth = 0;

function onReady() {
    console.log('Ready');

    $(document).on('click', '#submit', addToForm);
    $(document).on('click', '#deleteButton', deleteInput);
}

function deleteInput() {
    $(this).parent().remove();
}

function addToForm() {
    let inputFirstName = $('#firstName').val();
    let inputLastName = $('#lastName').val();
    let inputId = $('#inputId').val();
    let inputTitle = $('#title').val();
    let inputAnnualSalary = $('#annualSalary').val();
    //console.log(inputFirstName, inputLastName, inputId, inputTitle, inputAnnualSalary)

    
    //Append to table
    $('tbody').append(`
        <td>
            ${inputFirstName}
        </td>
        <td>
            ${inputLastName}
        </td>
        <td>
            ${inputId}
        </td>
        <td>
            ${inputTitle}
        </td>
        <td>
            ${inputAnnualSalary}
        </td>
        <br>
    `)
    $('tbody').append(`
        <tr></tr>
    `)
    
    
    //Append input to form
    /*
    $('form').append(`
        <label class="append">
            ${inputFirstName}
        </label>
        <label class="append">
            ${inputLastName}
        </label>
        <label class="append">
            ${inputId}
        </label>
            ${inputTitle}
        <label class="append">
            ${inputAnnualSalary}
        </label>
        <label class="append">
            <br>
            <button class="deleteButton">Delete</button>
        </label>
        <br>

    `)
*/
    totalMonthly();

    //Clear input
    $('#firstName').val('');
    $('#lastName').val('');
    $('#inputId').val('');
    $('#title').val('');
    $('#annualSalary').val('');

}


function totalMonthly(){
    let inputAnnualSalary = $('#annualSalary').val();
    totalPerMonth += parseInt(inputAnnualSalary) / 12;
    console.log(totalPerMonth);
}

