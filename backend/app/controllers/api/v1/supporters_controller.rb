class Api::V1::SupportersController < ApplicationController
    def index
        supporters = Supporter.all
        render json: supporters 
    end
    
    def show
        supporter = Supporter.find(params[:id])
        render json: supporter
    end

    def create 
        supporter = Supporter.new(supporter_params)
        render json: supporter
    end

    def update
        supporter = Supporter.find(params[:id])
        supporter.update 

        render json: supporter
    end

    private

    def supporter_params
        params.require(:supporter).permit()
    end
end
