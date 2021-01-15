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
      get "/auto_login", to: "auth#auto_login"
      get "/user_is_authed", to: "auth#user_is_authed"
    end
  end

end
