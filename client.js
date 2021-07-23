$(document).ready(onReady);

let totalPerMonth = 0;

function onReady() {
    console.log('Ready');

    $(document).on('click', '#submit', addToForm);
    $(document).on('click', '#deleteButton', deleteInput);
}

function deleteInput() {
    console.log('delete test');
    $(this).parent().remove();
}

function addToForm() {
    let inputFirstName = $('#firstName').val();
    let inputLastName = $('#lastName').val();
    let inputId = $('#inputId').val();
    let inputTitle = $('#title').val();
    let inputAnnualSalary = $('#annualSalary').val();
    

    $('tbody').append(`
        <tr>
            <td>${inputFirstName}</td>
            <td>${inputLastName}</td>
            <td>${inputId}</td>
            <td>${inputTitle}</td>
            <td>${inputAnnualSalary}</td>
        </tr>
    `)
    
    totalMonthly();

    //Clear input
    $('#firstName').val('');
    $('#lastName').val('');
    $('#inputId').val('');
    $('#title').val('');
    $('#annualSalary').val('');

}

function totalMonthly() {
    let total = 0;
    let inputAnnualSalary = $('#annualSalary').val();
    totalPerMonth += parseInt(inputAnnualSalary) / 12;
    total += totalPerMonth
    //console.log(totalPerMonth);
    console.log(total);

    $('#monthly').append(`
    <span>
        ${(total)}
    </span>`)
}

