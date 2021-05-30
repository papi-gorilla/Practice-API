class Plan < ApplicationRecord
  has_many :starts, dependent: :destroy
  has_many :goals, dependent: :destroy
  has_many :waypoints, dependent: :destroy
end
