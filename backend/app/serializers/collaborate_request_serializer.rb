class CollaborateRequestSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :user_id

  belongs_to :project
  belongs_to :user
end
