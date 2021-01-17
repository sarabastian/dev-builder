class Api::V1::UsersController < ApplicationController
  
    def index
        users = User.all
        render json: users 
    end
    
    def show
        current_user = User.find(params[:id])
        render json: current_user
    end

    # def profile
    #     render json: { user: UserSerializer.new(current_user) }, status: :accepted
    # end
    
    def create
      @user = User.create(user_params)

      if @user.valid?
        @user.save

        payload = { user_id: @user.id}
        token = JWT.encode(payload, 'Phase4')

        render json: { user: UserSerializer.new(@user), auth_key: token }, status: :created
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
        params.require(:user).permit(:username, :password, :name, :location, :profile_pic, :bio)
    end
end
