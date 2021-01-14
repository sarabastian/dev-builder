class SupporterSerializer < ActiveModel::Serializer
  has_many :supporterships
  has_many :projects, through: :supporterships
  has_many :comments
  has_many :projects, through: :comments
  has_many :collaborate_requests
  
  attributes :id
end
