$(document).ready(function() {
  $('#add_todo').on("submit", function(e){
    e.preventDefault();
    var item_added = $('#todo_input').val()
    $.ajax({
      method: "POST",
      url: "/add_todo",
      data: $('#todo_input').val()
    }).done(function(response_from_ruby) {
      $("#todo_title").text(response_from_ruby)
      var template = $('#todo_template').html()
      $('.todo_list').append(template)
      $("#todo_input").val("")
    });




  })

  // $('ul').on('click', '.delete', function(){
  //   $(this).hide()
  //   console.log("work")
  // })










});
