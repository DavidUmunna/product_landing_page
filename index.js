/*document.getElementsByTagName('span')[0].innerHTML=accept*/

/*var name=" TrailBliss Travels"
var intro="hello we are" + name;
var client_name;
alert(intro);
client_name=prompt('what is your name?:') 
alert('welcome '+ client_name)*/


function getSelectedValue() {
    // Get the dropdown element by its ID
    const dropdown = document.getElementById("myDropdown");
    // Get the selected value
    const selectedValue = dropdown.value;
    // Display the selected value in the paragraph
    document.getElementById("selectedValue").innerText = "You selected: " + selectedValue;
}