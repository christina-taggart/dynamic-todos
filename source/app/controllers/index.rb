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
  @todo = Todo.find(params[:id]).update_attributes(complete: true)
end

delete '/:id/remove' do
  @todo = Todo.find(:id).destroy_all
  redirect '/'
end