class ReplySerializer < ActiveModel::Serializer
  attributes :id, :post_id, :replier_id, :reply

  belongs_to :post
  belongs_to :user, foreign_key: :replier_id
end
