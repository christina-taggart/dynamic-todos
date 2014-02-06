get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/add_todo' do
  p "Inside /add_todo route!"
  p params

  @todo = Todo.create(todo_content: params["todo_content"])
  @todo.to_json
end

