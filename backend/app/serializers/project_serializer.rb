class ProjectSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :supporterships
  has_many :supporters, through: :supporterships
  has_many :posts
  
  attributes :id, :title, :story, :timeline, :fundraising_goal, :image, :github, :language, :stage, :user_id
end
