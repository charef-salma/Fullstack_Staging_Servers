class ReservationCleanup

def self.cleanup_old_papertrail_versions
    # retention_period = 30.minutes # Par exemple, conserver les versions pendant 30 jours
    # deletion_date = retention_period.ago
    current_time = Time.current
    PaperTrail::Version.where('created_at < ?', current_time - 12.hours).delete_all
    # PaperTrail::Version.where('created_at < ?', deletion_date).delete_all
  end

end
