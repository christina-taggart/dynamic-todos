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

delete '/delete_todo/:id' do
  @todo = Todo.delete(params[:id])
  params[:id].to_json
end

put '/complete_todo/:id' do
  @todo = Todo.find(params[:id]).update_attributes(completed: true)
  params[:id].to_json
end