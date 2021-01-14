class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :location

  has_many :projects
  has_many :supporterships
  has_many :supporters, through: :supporterships
  has_many :projects, through: :supporterships
  has_many :posts
  has_many :comments 
  has_many :commenters, through: :comments
  has_many :collaborate_requests 
  has_many :requesters, through: :collaborate_requests
  has_many :replies 
  has_many :repliers, through: :replies
end
