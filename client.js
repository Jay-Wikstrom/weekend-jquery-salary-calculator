

let salaryCalculatorArray = [];

$(document).ready(onReady);

function onReady() {
    $(document).on('click', '#submit', addToForm);
    $(document).on('click', '.deleteButton', deleteInput);
}

//Delete row added to table
function deleteInput() {
    console.log('delete test');
    $(this).parent().parent().remove();
}

//Add values to form using inputs
function addToForm() {

    let salaryCalculator = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#inputId').val(),
        title: $('#title').val(),
        annualSalary: Number($('#annualSalary').val())
    }
    //Push values into salary calculator array
    salaryCalculatorArray.push(salaryCalculator);

    $('tbody').append(`
        <tr>
            <td>${salaryCalculator.firstName}</td>
            <td>${salaryCalculator.lastName}</td>
            <td>${salaryCalculator.id}</td>
            <td>${salaryCalculator.title}</td>
            <td>${salaryCalculator.annualSalary}</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>
    `)

    totalMonthly()

    $('input').val('')

} //end addToForm function

//Add to total monthly cost
function totalMonthly() {
    let totalPerYear = 0
    for (let item of salaryCalculatorArray) {
        totalPerYear += item.annualSalary;
    }

    totalPerMonth = totalPerYear / 12;
    totalPerMonth = Math.ceil(totalPerMonth);
    let updateMonthColor = $('#totalMonthly')

    //Check to see if costs are greater than 20,000
    //Change monthly cost to red if it is greater than 20,000
    $('#monthly').text(totalPerMonth);
    if (totalPerMonth > 19999){
        updateMonthColor.css('color', 'red');
    }

    return totalPerMonth;
}
