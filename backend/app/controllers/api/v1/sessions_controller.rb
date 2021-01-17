class Api::V1::SessionsController < ApplicationController
    def create 
        
        @user = User.find_by(username: users_params[:username])
        if @user && @user.authenticate(users_params[:password])
    
            payload = { user_id: @user.id } 
            token = JWT.encode(payload, 'Phase4')
    
            render json: { auth_key: token, user_info: payload }, :status => :ok
        else
            render json: { :msg => "Login failed.." }, :status => :ok
        end
    end
    
    private
    def users_params
        params.require(:user).permit(:username, :password)
    end
end