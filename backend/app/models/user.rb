class User < ApplicationRecord
    has_many :projects
    has_many :supporterships
    has_many :supporters, through: :supporterships
    has_many :projects, through: :supporterships, source: :user_supporting_projects
  
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
   
end
