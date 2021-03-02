Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
     
      root to: 'application#home'
      resources :users
      post '/login', to: 'sessions#create'
      post '/signup', to: 'users#create'
      resources :projects
      resources :collaborate_requests
      resources :comments
      resources :supporterships
      resources :posts
      resources :replies 
      

      # get "/auto_login", to: "auth#auto_login"
      # get "/user_is_authed", to: "auth#user_is_authed"
    end
  end

end
