$(document).ready(onReady);

let totalPerMonth = 0;

function onReady() {
    console.log('Ready');

    $(document).on('click', '#submit', addToForm);
    //$(document).on('click', '#deleteButton', deleteInput);
}
/*
function deleteInput() {
    console.log('delete test');
    $(this).parent().remove();
}*/

function addToForm() {


    let salaryCalculator = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#inputId').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val()
    }

    /*
    let inputFirstName = $('#firstName').val();
    let inputLastName = $('#lastName').val();
    let inputId = $('#inputId').val();
    let inputTitle = $('#title').val();
    let inputAnnualSalary = $('#annualSalary').val();
    */
    

    $('tbody').append(`
        <tr>
            <td>${salaryCalculator.firstName}</td>
            <td>${salaryCalculator.lastName}</td>
            <td>${salaryCalculator.id}</td>
            <td>${salaryCalculator.title}</td>
            <td>${salaryCalculator.annualSalary}</td>
        </tr>
    `)
    
    totalMonthly();

    /*
    //Clear input
    $('#firstName').val('');
    $('#lastName').val('');
    $('#inputId').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    */
    $('input').val('')

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

