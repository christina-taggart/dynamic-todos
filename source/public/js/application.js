$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $('.delete').on("submit", function(event){
      event.preventDefault();
      deleteTodo(this);
    });
  }

  //Create functions to add, remove and complete todos



  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});

function deleteTodo(thing) {
  $.ajax({
    type: "DELETE",
    url: thing.action,
  }).done(function(response){
    $(".todo_list").html(response)
  }).fail(function(){
    console.log("failed")
  })
}