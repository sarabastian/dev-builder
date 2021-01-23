class Api::V1::SupportershipsController < ApplicationController
    def index
        supporterships = Supportership.all
        render json: supporterships
    end
    
    def show
        supportership = Supportership.find(params[:id])
        render json: supportership
    end

    def create 
        supportership = Supportership.create(supportership_params)
        render json: supportership
    end

    def update
        supportership = Supportership.find(params[:id])
        supportership.update 

        render json: supportership
    end

    private

    def supportership_params
        params.require(:supportership).permit(:project_id, :user_id)
    end
end
