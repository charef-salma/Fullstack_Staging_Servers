class ServeurController < ApplicationController
  skip_before_action :verify_authenticity_token

    def index
        serveurs = Serveur.all
        render json:serveurs, status: 200
    end
   
    def reservation_serveur

      server = Serveur.find(params[:id])
      # @conteur = server.reservers.count
      reservations = server.reservers.all


      ReservationCleanupService.cleanup_old_papertrail_versions

      if  server.status == 'booked'
        server.update(status: 'free')


      render json:server, status: 200

     end
    end 
    #  def Statuslist
    #   reservation = Reserver.find(params[:id])
    # # Accédez au champ "name" de l'utilisateur
    #   name = reservation.status
    #   render json:name, status: 200
    #  end 

      def show
        serveur = Serveur.find(params[:id])
        # reservations = serveur.reservers.all
        if serveur
          # render json: reservations, status: 200
          render json: serveur, status: 200
          
        else
          render json: { errors: "serveur not found "}
      end
    end

      def new
        serveur = Serveur.new
      end

      def create
        serveur = Serveur.new(serveur_params)
        
        if serveur.save
          render json: serveur, status: 200
          
          
        else
          render json: { errors: "creating erros" }

        end
      end

      def edit
        serveur = Serveur.find(params[:id])
      end

      def update
        serveur =Serveur.find(params[:id])

        if serveur

          serveur.update(serveur_params)
          render json: {message: "Updated successfully"}
        else
          render json: { errors: "updating erros" }

      end
    end

    def update_status
      server = Serveur.find(params[:id])
      @conteur = server.reservers.count

      if server.status == 'free' and  (@conteur<4)
       server.update(status: 'booked')
       render json: server, status: :ok
      end
      
      # if  server.status == 'booked'
      #   server.update(status: 'free')
      #  render json: { message: "Failed to update server status" }

      # end

  end

  def update_free
    server = Serveur.find(params[:id])
    if  server.status == 'booked'
         server.update(status: 'free')
         reservation_deleted = server.reservers.destroy_all

        #  render json: reservation_deleted, status: :ok    
         render json: { message: "update server status to free " }
      else
      render json: { message: "Server is not booked." }, status: :unprocessable_entity
    end    
    


  end

    def destroy
      serveur = Serveur.find(params[:id])
      if serveur
      serveur.destroy
      render json: {message: "Server deleted "}

       end
  end
    
    
        

      private
      def serveur_params
        params.require(:serveur).permit(:nom, :status )
        
      end

end
