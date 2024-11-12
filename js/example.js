var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading = headingText + ' <span>' + totalItems + '</span>'; // Content

/*  WRITE YOUR CODE BELOW */

// Part 1: Loop through each item in the list
for (var i = 0; i < listItems.length; i++) {
  var itemText = listItems[i].textContent.toLowerCase(); // Get the text of each item and make it lowercase

  // Check if the item is "fresh figs," "kale," or "honey"
  if (itemText === 'fresh figs' || itemText === 'kale' || itemText === 'honey') {
    listItems[i].className = 'fancy'; // Change the class to "fancy" for the bonus
  }
}

// Part 2: Update the heading text with the number of items
heading.innerHTML = newHeading;
