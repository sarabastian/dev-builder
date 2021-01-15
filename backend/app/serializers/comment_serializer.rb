class CommentSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :user_id, :blurb

  belongs_to :project
  belongs_to :user
  # belongs_to :user, class_name: "User", foreign_key: :user_id
 
end
