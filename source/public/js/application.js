$(document).ready(function() {
  $('#create-task').on("submit", function(e){
    e.preventDefault()
    $.ajax({
      type: 'post',
      url: '/created',
      data: $(this).serialize()
    }).done(function(erb) {
      $('#task-list').append(erb)
    })
  })

  $(document).on("click", '.delete-button', function(e){
    e.preventDefault();
    console.log("delete")
    url = $(this).attr('href')
    $.ajax({
      type: 'delete',
      url: url
    }).done(function(task_id) {
      $("#" + task_id).remove()
    })
  })

  $(document).on("click", '.edit-button', function(e){
    e.preventDefault();
    url = $(this).attr('href')
    $.ajax({
      type: 'get',
      url: url

    }).done(function(erb) {
      id = url.match(/\d+/)[0]
      $("#edit-task").remove()
      $("#" + id).append(erb)

    })
  })

  $(document).on("submit", '#edit-task', function(e){
    e.preventDefault();
    url = $(this).attr('action')
    $.ajax({
      type: 'put',
      url: url,
      data: $(this).serialize()
    }).done(function(erb) {
      console.log("asdfasdf")
      id = url.match(/\d+/)[0]
      $("#" + id).replaceWith(erb)
    })
  })



});

