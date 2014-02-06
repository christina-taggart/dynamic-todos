get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/add_todo' do
  p "Inside /add_todo route!"
  p params
  dog = {}

  dog[:todo_content] = 'fake jello'
  p "dog params: #{dog}"
  @todo = Todo.create(dog)
  @todo.todo_content.to_s
end

