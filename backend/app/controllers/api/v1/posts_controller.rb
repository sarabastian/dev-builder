class Api::V1::PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end
    
    def show
        post = Post.find(params[:id])
        render json: post
    end

    def create 
        post = Post.new(post_params)
        render json: post
    end

    def update
        post = Post.find(params[:id])
        post.update 

        render json: post
    end

    private

    def post_params
        params.require(:post).permit(:project_id, :user_id, :blurb)
    end
end
