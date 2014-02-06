$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('.add').on('click', function(event) {
      event.preventDefault();
        addTodo($('.todo').val())
    })


  }


  //Create functions to add, remove and complete todos

  var addTodo = function(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    $('.todo_list').append($todo);
  }


  bindEvents();
});




