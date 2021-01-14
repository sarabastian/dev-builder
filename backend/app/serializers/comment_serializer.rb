class CommentSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :commenter_id

  belongs_to :project
  belongs_to :user, foreign_key: :commenter_id
end
