$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    
    // Add todo
    $('.toolbox form').on('submit', function(event) {
      event.preventDefault();
      formData = $(this).serialize();
        $.ajax({
          type: this.method,
          url: this.action,
          data: formData
        }).done(function(serverResponse) {
          $('.todo_list').append(buildTodo(serverResponse));
        })
    })

    // Delete todo
    $('*').on('click', '.delete', function(event) {
      event.preventDefault();
      todo_content = getToDoContent($(this))
      $.ajax({
        type: 'delete',
        url: '/delete_todo',
        data: {"todo_content": todo_content}
      })
      // .done(function(){
      //   getToDoDiv($(this)).remove()
      // }).fail(function(){
      //   console.log("Failure")
      // })
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


  var getToDoContent = function(todo_button) {
    return todo_button.parents().eq(2).find('h2').text()
  }

  var getToDoDiv = function(todo_button) {
    return todo_button.parents().eq(3)
  }


  bindEvents();
});




