class Serveur < ApplicationRecord
    has_many :reservers

    validates :nom, presence: true
    validates :status, presence: true
   
end
