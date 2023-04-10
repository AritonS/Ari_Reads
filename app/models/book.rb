class Book < ApplicationRecord
  validates :title, presence: true
  validates :author, presence: true
  validates :status, presence: true
  validates :total_pages, numericality: { greater_than: 0 }, allow_nil: true
  validates :current_page, numericality: { greater_than: 0 }, allow_nil: true
  enum status: { want_to_read: 0, currently_reading: 1, finished_reading: 2 }
  
  belongs_to :list,
    foreign_key: :list_id,
    class_name: :List
end