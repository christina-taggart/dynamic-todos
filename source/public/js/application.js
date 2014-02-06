$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('.toolbox form').on('submit', function(event) {
      event.preventDefault();
      formData = $(this).serialize();
      console.log(formData)
        $.ajax({
          type: this.method,
          url: this.action,
          data: formData
        }).done(function(serverResponse) {
          $('.todo_list').append(buildTodo(serverResponse));
        })
    })

    $('.delete').on('click', function(event) {
      event.preventDefault();

    })
  }


  //Create functions to add, remove and complete todos

  var buildTodo = function(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});




