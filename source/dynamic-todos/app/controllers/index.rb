get '/' do
  @todos = Todo.all
  erb :index
end

post '/add_todo' do
  p params
  p "$$$$$$$"
  @todo_to_add = Todo.create(todo_content: params[:item_added])
  return @todo_to_add.todo_content
end

