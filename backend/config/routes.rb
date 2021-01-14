Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :projects
      resources :collaborate_requests
      resources :comments
      resources :supporterships
      resources :posts
      resources :replies 
      
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end

end
