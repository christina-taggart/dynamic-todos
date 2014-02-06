$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('form').on('submit', function(event) {
      event.preventDefault()
      var send_todo = $( this ).serialize()
      $.post( '/add_todo', send_todo )
        .done( function(todo_json) {
          json_parsed_todo = $.parseJSON(todo_json);
          // alert('todo_content is: ' + json_parsed_todo.todo.todo_content)
          $('.todo_list').append(buildTodo(json_parsed_todo.todo.todo_content))
          debugger
        })
    })
  }

  //Create functions to add, remove and complete todos



  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies its text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});
