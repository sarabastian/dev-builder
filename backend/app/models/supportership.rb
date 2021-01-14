class Supportership < ApplicationRecord
    belongs_to :project
    belongs_to :supporter, class_name: "User"
end
