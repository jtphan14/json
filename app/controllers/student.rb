get '/' do
  redirect '/students'
end

get '/students' do
  @students = Student.all
  erb :'index'
end

get '/student/:id' do
  "hello"
end

get '/students/new' do
  @student = Student.new
  erb :'new', layout: !request.xhr?
end

post '/students' do
  @student = Student.create(params[:student])
  if request.xhr?
    content_type :json
    @student.to_json
  else
   redirect '/students'
  end
end
