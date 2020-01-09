// Create an app that allows users to add, check, uncheck, and remove items
// from shopping list

// To Complete this challenge:
// Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles. ✓
// Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).  ✓
// Linking to your application JavaScript file from the index.html page.                              ✓
// Using this and event delegation                                                                    ✓

// REQUIREMENTS:
// In terms of user experience, your shopping list app must allow users to:
//      -enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button ✓
//      -check and uncheck items on the list by clicking the "Check" button                                        ✓
//      -permanently remove items from the list                                                                    ✓
// 
// Additionally:
// -Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html      ✓
// -Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

$(function() {

  // ADD ITEMS
  // when form is submitted (don't use .click. use .submit)
  $('#js-shopping-list-form').submit(event => { 
    event.preventDefault();
    // get text value entered into input element
    let newItem = $('#shopping-list-entry').val();

    // and append a new list item with that name
    $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div>
    </li>`);
    
    // This will clear your entered value from the input box after you Enter
    $('#shopping-list-entry').val('');

  });

  // CHECK AND UNCHECK ITEMS
  // When 'check' button is pressed
  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    // toggle the class .shopping-item__checked on and off
    $(event.target).closest('div').siblings().toggleClass('shopping-item__checked');
  });

  // REMOVE ITEMS
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    $(event.target).closest('li').remove();
  });
});
