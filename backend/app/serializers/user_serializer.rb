class UserSerializer < ActiveModel::Serializer
  has_many :projects
  has_many :supporterships
  has_many :supporters, through: :supporterships
  has_many :projects, through: :supporterships, source: :user_supporting_projects

  
  attributes :id, :username, :name, :location
end
