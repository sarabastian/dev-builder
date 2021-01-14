class CollaborateRequestSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :requester_id

  belongs_to :project
  belongs_to :user, foreign_key: :requester_id
end
