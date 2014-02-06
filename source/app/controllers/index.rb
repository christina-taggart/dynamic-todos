get '/' do
  @todos = Todo.all
  erb :index
end

post '/add_todo' do
  new_todo = Todo.create(params)
  new_todo.todo_content
end

delete '/delete_todo' do
  todo_content = params[:todo_content]
  todo_delete = Todo.find_by_todo_content(todo_content)
  todo_delete.destroy
end