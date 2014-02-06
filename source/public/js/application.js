$(document).ready(function() {


  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
  }

  //Create functions to add, remove and complete todos



  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var todo = $('#todo_template');
    // Modifies it's text to use the passed in todoName.
    // var to_do_template = '<div class="todo"><h2><p>' + todoName + '</p></h2><ul><li><a href="#" id= "" class="delete">Delete</a></li><li><a href="#" class="complete">Complete</a></li></ul></div>'
    todo.prepend(todoName)
    console.log('prepending worked!');
    // $todo.css('display', 'block');
    // Returns the jQueryDOMElement to be used elsewhere.
    return todo;
  }

  function updateTodo(todoNode) {
    $(todoNode).parent().parent().parent().addClass('completed-item');
  }

  function deleteTodo(todoNode) {
    $(todoNode).parent().parent().parent().remove();
  }




  bindEvents();

  // Our code starts below here
  $('#add_todo').on('submit', function(e) {
    e.preventDefault();
    var todo_creation_req = $.ajax({
      type: 'POST',
      url: '/todos',
      data: $('#user_input').serialize()
    });
    todo_creation_req.done(function(todo){
      buildTodo(todo);
      //console.log(todo);
    });
    todo_creation_req.always(function() {
      $('#user_input').val("");
    })
  })

  // bind on delete link
  $('#todo_template').on('click', '.delete', function(e) {
    e.preventDefault();
    var todoNode = this;
    var todo_id = $(todoNode).data('id');
    var todo_deletion_req = $.ajax({
      type: 'DELETE',
      url: '/todos/' + todo_id
    });

    todo_deletion_req.done(function(todo){
      deleteTodo(todoNode);
    });
  });

  // bind on complete link
  $('#todo_template').on('click', '.complete', function(e) {
    e.preventDefault();
    var todoNode = this;
    var todo_id = $(todoNode).data('id');
    var options = {
      type: 'PUT',
      url: '/todos/' + todo_id
    }

    $.ajax(options).done( function(todo){
        updateTodo(todoNode);
    });
  });
}); // end of document.ready
