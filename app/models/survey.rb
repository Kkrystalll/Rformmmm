class Survey < ApplicationRecord
  validates :title, presence: true

  has_many :questions, inverse_of: :survey
  validates_associated :questions
end
