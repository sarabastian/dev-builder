class Comment < ApplicationRecord
    belongs_to :project
    belongs_to :user, class_name: "User", foreign_key: "commenter_id"
    


end
