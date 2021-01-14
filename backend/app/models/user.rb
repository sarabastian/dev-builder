class User < ApplicationRecord
    has_many :projects
    has_many :supporterships
    has_many :supporters, through: :supporterships, class_name: "User", foreign_key: "supporter_id"
    # has_many :projects, through: :supporterships
    has_many :comments
    has_many :commenters, through: :comments, class_name: "User", foreign_key: "commenter_id"
    has_many :collaborate_requests 
    has_many :requesters, through: :collaborate_requests, class_name: "User", foreign_key: "requester_id"
    has_many :posts
  
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
   
end
