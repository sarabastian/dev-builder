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
            # byebug
        project = Project.create(project_params)
    
        render json: project
    end

    def update
        project = Project.find(params[:id])
        project.update(project_params)
        project.save

        render json: project
    end

    def destroy
        project = Project.find(params[:id])
        project.delete

    end

    private

    def project_params
        params.require(:project).permit(:title, :story, :timeline, :fundraising_goal, :image, :github, :language, :stage, :user_id)
    end
end
