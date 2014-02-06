get '/' do
  erb :index
end

post '/add_todo' do
  new_todo = Todo.create(params)
  new_todo.todo_content
end