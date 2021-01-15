class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :location, :profile_pic, :bio

  has_many :projects
  has_many :supporterships
  has_many :projects_supported, through: :supporterships, source: :project

  has_many :comments
  has_many :projects_commented_on, through: :comments, source: :project

  has_many :collaborate_requests
  has_many :collaborate_project_requests, through: :collaborate_requests, source: :project


  
end
