class ReplySerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :reply

  belongs_to :post
  belongs_to :user
end
