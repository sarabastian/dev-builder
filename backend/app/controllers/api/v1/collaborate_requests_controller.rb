class Api::V1::CollaborateRequestsController < ApplicationController
    def index
        collaborate_requests = CollaborateRequest.all
        render json: collaborate_requests 
    end
    
    def show
        collaborate_request = CollaborateRequest.find(params[:id])
        render json: collaborate_request 
    end

    def create 
        collaborate_request = CollaborateRequest.create(collaborate_request_params)
        render json: collaborate_request 
    end

    def update
        collaborate_request = CollaborateRequest.find(params[:id])
        collaborate_request.update 

        render json: collaborate_request 
    end

    private

    def collaborate_request_params
        params.require(:collaborate_request).permit(:project_id, :user_id)
    end
end
