class Project < ApplicationRecord
    belongs_to :user
    has_many :supporterships
    has_many :supporters, through: :supporterships
    has_many :updates
end
