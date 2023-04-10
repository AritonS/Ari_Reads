class List < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
  
  has_many :books, 
    foreign_key: :list_id,
    class_name: :Book,
    dependent: :destroy

end