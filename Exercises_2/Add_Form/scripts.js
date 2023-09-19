function addRow(){

    const firstName = document.getElementById('firstName').value;

    const lastName = document.getElementById('lastName').value;

    const email = document.getElementById('email').value;

    if (firstName.length < 3 || lastName.length < 3 || email.length < 3) {

        alert('Preencha todos os campos');

        return;

    }

    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td class="border p-2">${firstName}</td>
    <td class="border p-2">${lastName}</td>
    <td class="border p-2">${email}</td>
    `; 

document.getElementById('tableBody').appendChild(newRow);

document.getElementById('firstName').value = '';

document.getElementById('lastName').value = '';

document.getElementById('email').value = '';

}