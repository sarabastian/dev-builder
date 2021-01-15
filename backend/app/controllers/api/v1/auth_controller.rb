class Api::V1::AuthController < ApplicationController
  before_action :require_login
  # def create
  #   user = User.find_by(username: users_params[:username])

  #   if user && user.authenticate(users_params[:password])

  #     payload = { user_id: user.id }
  #     token = encode_token(payload)
    
  #     render json: { user: user, jwt: token }, :status => :ok
  #   else
  #     render json: { :msg => "Login failed.." }, :status => :ok
  #   end
  # end

  def login
    user = User.find_by(username: params[:username])
      if user && user.authenticate(users_params[:password])

      payload = { user_id: user.id }
      token = encode_token(payload)
    
      render json: { user: user, jwt: token, success: "Welcome back, #{user.username}" }
      else 
        render json: {failure: "Log in failed! Username or passwrd invalid!"}
      end
    end

    def auto_login
      if session_user 
        render json: session_user
      else 
        render json: {errors: "No User Logged In"}
      end
    end

    def logged_in?
      !!session_user
    end

    def require_login 
      render json: {message: 'Please Login'}, status: :unauthorized unless logged_in?
    end

  private
  def users_params
    params.require(:user).permit(:username,:password)
  end
  
  
  

end
