get '/' do
  @todos = Todo.all
  erb :index
end

post '/add_todo' do
  p params
  @todo = Todo.create(params)
  redirect '/'
end

put '/:id/edit' do
  @todo = Todo.find(params[:id]).update_attributes(completed: true)
  redirect '/'
end

delete '/:id/remove' do
  p "These are the params"
  p params
  @todo = Todo.find(params[:id])
  @todo.destroy
  redirect '/'
end