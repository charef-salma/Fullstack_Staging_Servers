# app/services/reservation_cleanup_service.rb
class ReservationCleanupService

    # def self.cleanup_expired_reservations
    #   # current_time = DateTime.now
    #   # Reserver.where('created_at < ?', current_time - 1.day)



    # end
    
    def self.cleanup_old_papertrail_versions
      retention_period = 1.day # Par exemple, conserver les versions pendant 30 jours
      deletion_date = retention_period.ago
    
      PaperTrail::Version.where('created_at < ?', deletion_date).delete_all
    end


  end
