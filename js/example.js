// get the list
var ul = document.querySelector('ul');

// ADD NEW ITEM TO END OF LIST
var temp = document.createElement('li');
temp.textContent = 'cream';
ul.appendChild(temp);

// ADD NEW ITEM START OF LIST
var temp2 = document.createElement('li');
temp2.textContent = 'kale';
ul.insertBefore(temp2, ul.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// get all li on page
var li = document.querySelectorAll('li');
// for each li add class
li.forEach(function(item) {
    item.classList.add('cool');
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// get header
var h2 = document.querySelector('h2');
// create span
var span = document.createElement('span');
// append content, content is number of li we found (li.length)
span.textContent = ` ${li.length}`;
h2.appendChild(span);