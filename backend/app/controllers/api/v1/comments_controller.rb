class Api::V1::CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments 
    end
    
    def show
        comment = Comment.find(params[:id])
        render json: comment
    end

    def create 
        comment = Comment.new(comment_params)
        render json: comment
    end

    def update
        comment = Comment.find(params[:id])
        comment.update 

        render json: comment
    end

    private

    def comment_params
        params.require(:comment).permit(:project_id, :commenter_id, :blurb)
    end
end
