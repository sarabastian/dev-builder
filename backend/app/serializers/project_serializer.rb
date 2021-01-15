class ProjectSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :supporterships
  has_many :supporters, through: :supporterships, source: :user
  has_many :posts
  has_many :comments
  has_many :commenters, through: :comments, source: :user
  has_many :collaborate_requests
  has_many :requesters, through: :collaborate_requests, source: :user
  
  attributes :id, :title, :story, :timeline, :fundraising_goal, :image, :github, :language, :stage, :user_id
end
