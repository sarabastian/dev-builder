class Project < ApplicationRecord
    belongs_to :user
    has_many :supporterships
    has_many :supporters, through: :supporterships, source: :user
    has_many :comments
    has_many :commenters, through: :comments, source: :user
    has_many :posts
    has_many :collaborate_requests
    has_many :requesters, through: :collaborate_requests, source: :user
end
