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
          $('.todo_list').append(buildTodo(json_parsed_todo))
          // debugger
        })

    })
  }

  //Create functions to add, remove and complete todos



  function buildTodo(todoJSON) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies its text to use the passed in todoName.
    $todo.attr('id', 'todoid-'+todoJSON.todo.id)
    $todo.find('h2').text(todoJSON.todo.todo_content);
    $todo.find('.delete').attr('href','/delete_todo/'+todoJSON.todo.id)
    $todo.find('.delete').attr('onclick','deleteTodo.call(this, event)')
    $todo.find('.complete').attr('href','/complete_todo/'+todoJSON.todo.id)
    $todo.find('.complete').attr('onclick','completeTodo.call(this, event)')
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});


function deleteTodo(event) {
  event.preventDefault()
  console.log('clicked delete')
  $.ajax({
    url: $(this).attr('href'),
    type: 'DELETE',
    success: function(result) {
      the_id = $.parseJSON(result)
      $('#todoid-'+the_id).remove()
    }
  })
}


function completeTodo(event) {
  event.preventDefault()
  console.log('clicked complete')
  $.ajax({
    url: $(this).attr('href'),
    type: 'PUT',
    success: function(result) {
      the_id = $.parseJSON(result)
      $('#todoid-'+the_id).addClass('completed')
      $('#todoid-'+the_id).find('.complete').parent().remove()
    }
  })
}