class Question < ApplicationRecord
  validates :title, presence: true

  belongs_to :survey
  has_many :answers

  enum question_type: { "單選": 0, "多選": 1, "問答":2 }

  def self.question_type_select
    question_types.keys.map { |k| [k, k] }
  end
end
