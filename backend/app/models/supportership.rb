class Supportership < ApplicationRecord
    belongs_to :project
    belongs_to :user, class_name: "User", foreign_key: "supporter_id"
    # has_many :supporters, :through => :supporterships, :source => :user
end
