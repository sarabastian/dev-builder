class Api::V1::RepliesController < ApplicationController
    def index
        replies = Reply.all
        render json: replies 
    end
    
    def show
        reply = Reply.find(params[:id])
        render json: reply
    end

    def create 
        reply = Reply.new(reply_params)
        render json: reply
    end

    def update
        reply = Reply.find(params[:id])
        reply.update 

        render json: reply
    end

    private

    def reply_params
        params.require(:reply).permit(:post_id, :replier_id, :reply)
    end
end
