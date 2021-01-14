class Api::V1::ProjectsController < ApplicationController
    def index
        projects = Project.all
        render json: projects 
    end
    
    def show
        project = Project.find(params[:id])
        render json: project
    end

    def create 
        project = Project.new(project_params)
        render json: project
    end

    def update
        project = Project.find(params[:id])
        project.update 

        render json: project
    end

    private

    def project_params
        params.require(:project).permit(:title, :story, :timeline, :fundraising_goal, :image, :github, :language, :stage, :user_id)
    end
end
