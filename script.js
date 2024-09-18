document.addEventListener('DOMContentLoaded', function () {
    const addRowBtn = document.getElementById('addRowBtn');
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0]; // Get tbody element

    addRowBtn.addEventListener('click', function () {
        // Create a new table row (tr)
        const newRow = document.createElement('tr');

        // Construct the inner HTML for the new row
        newRow.innerHTML = `
                        <td style="width: 40%;" colspan="2">
                            <textarea class="input dark" placeholder="Enter item name/description"
                                style="height: 50px; width: 95%;"></textarea>
                        </td>
                        <td style="width: 10%;"><input type="number" class="input dark right" id="prod_qlt"
                                placeholder="0" value="" style="width: 100%">
                        </td>
                        <td style="width: 10%;"><input type="number" class="input dark right" id="prod_qlt"
                                placeholder="0" value="" style="width: 100%">
                        </td>
                        <td style="width: 10%;"><input type="number" class="input dark right" id="prod_qlt"
                                placeholder="0" value="" style="width: 100%">
                        </td>
                        <td style="width: 10%;"><input type="number" class="input dark right" id="prod_qlt"
                                placeholder="0" value="" style="width: 100%">
                        </td>
                        <td style="width: 10%;"><input type="number" class="input dark right" id="prod_qlt"
                                placeholder="0" value="" style="width: 100%">
                        </td>

                        <td style="font-family: Arial, Helvetica, sans-serif; width: 10%;" class="deleteBtn"><button
                                style="padding: 10px; background: transparent; border: 0px;">X</button></td>
`;

        // Append the new row to the table body
        invoiceTable.appendChild(newRow);

        // Add event listener for delete button in the new row
        const deleteBtn = newRow.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', function () {
            // Remove the row
            newRow.remove(); 
        });
    });
});

// Function to calculate total amount
function calculateTotal() {
    // Get input values
    let quantity = parseFloat(document.getElementById('prod_qlt').value) || 0;
    let amount = parseFloat(document.getElementById('prod_ant').value) || 0;
    let gstRate = parseFloat(document.getElementById('prod_rte').value) || 0;
    let sgstRate = parseFloat(document.getElementById('prod_sgst').value) || 0;
    let cgstRate = parseFloat(document.getElementById('prod_cgst').value) || 0;

    // Calculate total amount
    let total = amount * (1 + (gstRate / 100) + (sgstRate / 100) + (cgstRate / 100)) * quantity;

    // Update the total_amount span with formatted total
    document.getElementById('total_amount').textContent = total.toFixed(2);
}

// Add event listeners to input fields and selects
document.getElementById('prod_qlt').addEventListener('input', calculateTotal);
document.getElementById('prod_ant').addEventListener('input', calculateTotal);
document.getElementById('prod_rte').addEventListener('input', calculateTotal);
document.getElementById('prod_sgst').addEventListener('change', calculateTotal);
document.getElementById('prod_cgst').addEventListener('change', calculateTotal);

function change_select() {
    document.getElementById('tot_sgst').innerHTML = document.getElementById('prod_sgst').value + '%';

    document.getElementById('tot_cgst').innerHTML = document.getElementById('prod_cgst').value + '%';
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("save_data");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";

    document.getElementById('inv_no').innerHTML = document.getElementById('invi_no').value;
    document.getElementById('inv_dt').innerHTML = document.getElementById('invi_dt').value;

    // business data 
    document.getElementById('ur_nm').innerHTML = document.getElementById('bus_name').value;
    document.getElementById('ur_numb').innerHTML = document.getElementById('bus_numb').value;
    document.getElementById('ur_gst').innerHTML = document.getElementById('bus_gstn').value;
    document.getElementById('ur_add').innerHTML = document.getElementById('bus_add').value;
    document.getElementById('ur_city').innerHTML = document.getElementById('bus_cty').value;
    document.getElementById('ur_code').innerHTML = document.getElementById('bus_pin').value;
    document.getElementById('ur_state').innerHTML = document.getElementById('bus_state').value;

    // clint data 
    document.getElementById('clt_nm').innerHTML = document.getElementById('clnt_nm').value;
    document.getElementById('clt_nm').innerHTML = document.getElementById('clnt_numb').value;
    document.getElementById('clt_gstin').innerHTML = document.getElementById('clnt_gstin').value;
    document.getElementById('clt_add').innerHTML = document.getElementById('clnt_add').value;
    document.getElementById('clt_cty').innerHTML = document.getElementById('clnt_city').value;
    document.getElementById('clt_code').innerHTML = document.getElementById('clnt_pin').value;
    document.getElementById('clt_state').innerHTML = document.getElementById('clnt_state').value;

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Function to update the output table
function updateOutputTable() {
    // Assuming you have IDs for each input field in the inputTable
    var itemName = document.getElementById('prod_nm').value;
    var itemQuantity = parseInt(document.getElementById('prod_qlt').value);
    var itemRate = parseFloat(document.getElementById('prod_rte').value);
    var itemCGST = parseFloat(document.getElementById('prod_cgst').value);
    var itemSGST = parseFloat(document.getElementById('prod_sgst').value);

    // Calculating amount (example calculation)
    var itemAmount = itemQuantity * itemRate;

    // Updating the labels in the output table
    document.getElementById('itm_nm').textContent = itemName;
    document.getElementById('itm_qty').textContent = itemQuantity;
    document.getElementById('itm_rate').textContent = itemRate.toFixed(2);
    document.getElementById('itm_cgst').textContent = itemCGST.toFixed(2);
    document.getElementById('itm_sgst').textContent = itemSGST.toFixed(2);
    document.getElementById('itm_amu').textContent = itemAmount.toFixed(2);
}

// Function to handle changes in select boxes (if applicable)
function change_select() {
    // Additional logic if onchange event is required
    updateOutputTable(); // Update table on change
}


// Function to print invoice
function printInvoice() {
    window.print();
}


