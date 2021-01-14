class Api::V1::UsersController < ApplicationController

    def index
        users = User.all
        render json: users 
    end
    
    def show
        user = User.find(params[:id])
        render json: user
    end

    def create 
        user = User.new(user_params)
        if @user.valid?
            render json: { user: UserSerializer.new(@user) }, status: :created
          else
            render json: { error: 'failed to create user' }, status: :not_acceptable
          end
    end

    def update
        user = User.find(params[:id])
        user.update 

        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :name, :location)
    end
end
