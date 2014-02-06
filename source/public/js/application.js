$(document).ready(function() {

  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {

    $("#todo_form").submit(function(e){
      console.log("test")
      e.preventDefault();
      var todo_text = $("#todo_field").val().trim();
      $.post('/add_todo', {"todo_content" : todo_text}).done(function(response){
        $(".todo_list").append(response);
      });
    })

    $(".todo_list").on('click', '.delete', function(e){
        var $this = $(this)
        var todo_id = $this.data('id');
        $.ajax({
          url: 'todos/' + todo_id,
          type: 'DELETE',
        }).done(function(response) {
          $this.closest('div').fadeOut();
          $this.remove();
        })
    })

    $(".todo_list").on('click', '.complete', function(e){
        var $this = $(this)
        var todo_id = $this.data('id');
        $.ajax({
          url: 'todos/' + todo_id,
          type: 'put',
        }).done(function(response) {
          $this.closest('div').addClass('complete')
        })
    })
  }

  bindEvents();
});