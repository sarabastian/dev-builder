class Reply < ApplicationRecord
    belongs_to :post
    belongs_to :user, class_name: "User", foreign_key: "replier_id"
    # has_many :repliers, :through => :replies, :source => :user
end
