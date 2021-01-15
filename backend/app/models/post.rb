class Post < ApplicationRecord
    belongs_to :project
    belongs_to :user
    has_many :replies
    has_many :repliers, through: :replies, source: :user
 
end
