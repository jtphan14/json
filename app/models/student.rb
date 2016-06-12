class Student < ActiveRecord::Base
  validates :first_name, :last_name, :email, presence: true
  # Remember to create a migration!
end

