class Api::V1::SupportershipsController < ApplicationController
    def index
        supporterships = Supporterships.all
        render json: supporterships
    end
    
    def show
        supportership = Supportership.find(params[:id])
        render json: supportership
    end

    def create 
        supportership = Supportership.new(supportership_params)
        render json: supportership
    end

    def update
        supportership = Supportership.find(params[:id])
        supportership.update 

        render json: supportership
    end

    private

    def supportership_params
        params.require(:supporter).permit()
    end
end
