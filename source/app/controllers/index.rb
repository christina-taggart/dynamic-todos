get '/' do
  @todos = Todo.all #order(created_at: :desc)
  erb :index
end

post '/add_todo' do
  Todo.create(todo_content: params[:todo_content])
  redirect '/'
end

delete '/todo/:id' do
  Todo.destroy(params[:id])
  @todos = Todo.all
  erb :todo, layout: false
end