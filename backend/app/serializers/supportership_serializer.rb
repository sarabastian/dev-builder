class SupportershipSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :supporter_id

  belongs_to :project
  belongs_to :user, foreign_key: :supporter_id
  
end
