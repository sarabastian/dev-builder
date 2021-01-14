class CollaborateRequest < ApplicationRecord
    belongs_to :project
    belongs_to :user, class_name: "User", foreign_key: "requester_id"
    # has_many :requesters, :through => :collaborate_requests, :source => :user
end
