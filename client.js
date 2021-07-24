

let salaryCalculatorArray = [];

$(document).ready(onReady);

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
        annualSalary: Number($('#annualSalary').val())
    }
    salaryCalculatorArray.push(salaryCalculator);
    console.log(salaryCalculatorArray);
    

    $('tbody').append(`
        <tr>
            <td>${salaryCalculator.firstName}</td>
            <td>${salaryCalculator.lastName}</td>
            <td>${salaryCalculator.id}</td>
            <td>${salaryCalculator.title}</td>
            <td>${salaryCalculator.annualSalary}</td>
        </tr>
    `)

    let totalPerYear = 0
    for (let item of salaryCalculatorArray){
        totalPerYear += item.annualSalary;
    }
    totalPerMonth = totalPerYear / 12;
    
    $('#monthly').text(totalPerMonth)
    console.log(salaryCalculator.annualSalary);

    //totalMonthly();

   
    $('input').val('')

}



