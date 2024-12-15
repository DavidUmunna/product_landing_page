/*document.getElementsByTagName('span')[0].innerHTML=accept*/

/*var name=" TrailBliss Travels"
var intro="hello we are" + name;
var client_name;
alert(intro);
client_name=prompt('what is your name?:') 
alert('welcome '+ client_name)*/


/*function getSelectedValue() {
    // Get the dropdown element by its ID
    const dropdown = document.getElementById("myDropdown");
    // Get the selected value
    const selectedValue = dropdown.value;
    // Display the selected value in the paragraph
    document.getElementById("selectedValue").innerText = "You selected: " + selectedValue;
}*/

const element= document.querySelectorAll('#list-items')
const btn= document.getElementById('icon_')
const image=document.getElementById('img_1')
const li=document.createElement('li');
const originalLogo= 'assets/home.png'
let      ul=document.querySelector('#ul_2')
const card_items=document.querySelector('#card_items')



function traverse_list(lst_){
    for (let i=0;i<lst_.length;i++){
            lst_[i].style.fontSize = '1rem';
    }
}
//btn.addEventListener('click',()=>{ image.src='assets/open-door.png'})
btn.addEventListener('mousedown', () => {
    image.src = 'assets/open-door.png'; 
});
  
btn.addEventListener('mouseup', () => {
    image.src = originalLogo; 
});
//adding element
ul.append(li)
console.log()
li.innerHTML='<a href="https://reddit.com" class="txt-gray-600 hover:text-black transition"><i class="fab fa-reddit"></i></a>'; 
li.classList.add('mx-2')
traverse_list(element)

//console.log(element)
console.log(card_items.innerHTML)
console.log(card_items.innerText)
console.log(card_items.classList.contains('card-items   '))
console.log(image)


//parent ndoe traversal
//console.log(ul.parentElement.parentElement)
//console.log(ul.parentNode)

//child node traversal

var footer=ul.parentNode.parentNode.parentElement
//console.log(ul.childNodes)
ul.childNodes[1].style.color='black '
var att =ul.getAttribute('class')
console.log('classes:',att )
console.log(footer.querySelector('#copyright'))

var item=footer.querySelector('#copyright')

item.style.backgroundColor='black'
item.style.borderRadius='10px  '
item.style.color='white'
item.style.marginTop='10px'
item.style.marginBottom='15px'
item.style.paddingBottom='-5px'

//creating a div
var newDiv = document.createElement('div');
var innerDiv = document.createElement('div');
innerDiv.className='image-container'
const img = document.createElement("img");
img.src = "assets/shoes_1.jpg "; // Set image source
img.alt = "Image"; // Set alt text
img.className='img-fluid rounded-3  mx-auto card-img-top'

const section=document.querySelector('section')
section.append(newDiv)

innerDiv.appendChild(img)
newDiv.appendChild(innerDiv)

const text_div=document.createElement('div')






//FORM VALIDATION
function validateForm(e){
    e.preventDefault()
    var name=document.enquiryform.name.value
    var Email = document.enquiryform.Email.value
    if (name.length==0){
        return alert(`name is required`)
    }
    if ('@' in Email==false){
        return alert(`Not an Email please input an Email`)
    }

}