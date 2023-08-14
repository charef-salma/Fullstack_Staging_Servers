class Reserver < ApplicationRecord
    belongs_to :serveur

    has_paper_trail

    # scope :not_modified, -> { joins(:versions).where(versions: { event: 'destroy' }) }
  


    validates :nom, presence: true
    validates :serveur_name, presence: true
    validates :specialite, presence: true
    validates :periode, presence: true
    validates :status, presence: true
    #  validates :serveur_id, presence: true
    
    enum status: { booked: 1, free: 2 }

    # def self.cleanup_expired_reservations
    #     current_time = DateTime.now
    #     Reserver.where('created_at < ?', current_time - 1.hour).destroy_all
    #   end
end
