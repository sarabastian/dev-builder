class PostSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :user_id, :blurb

  belongs_to :project
  belongs_to :user
  has_many :replies
  has_many :repliers, through: :replies, source: :user
end
