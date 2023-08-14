class ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
    def index
      # @serveur = Serveur.find(params[:serveur_id])
      #   reservations = @serveur.reservers.all
       
      #   render json:reservations, status: 200
      reservation = Reserver.all
      render json:reservation, status: 200

    end

    def history


      destroyed_versions = PaperTrail::Version.includes(:item).where(item_type: 'Reserver', event: 'destroy')
      created_reservations = Reserver.where(created_at: (Time.current - 12.hour)..Time.current) 
      destroyed_objects = []
      
      destroyed_versions.each do |version|
        serialized_data = YAML.load(version.object)  # Deserialize the YAML data
      
        if serialized_data
          id=serialized_data['id']
          nom = serialized_data['nom']
          serveur_name = serialized_data['serveur_name']
          specialite = serialized_data['specialite']
          periode = serialized_data['periode']
          # status = serialized_data['status']
          created_at = version.created_at
      
          destroyed_objects << {
            id: id,
            nom: nom,
            serveur_name: serveur_name,
            specialite: specialite,
            periode: periode,
            # status: status,
            created_at: created_at
          }
        end
      end

      data_to_render = {
           destroyed_objects:  destroyed_objects,
      
           created_reservations: created_reservations
    
         }
    
   
      # render json: { destroyed_objects: destroyed_objects }, status: :ok

      render json:  data_to_render , status: :ok

    end 

  
    #  def Statuslist
    #   reservation = Reserver.find(params[:id])
    # # Accédez au champ "name" de l'utilisateur
    #   name = reservation.status
    #   render json:name, status: 200
    
     

      def show_reservations
         @serveur = Serveur.find(params[:id])
         reservations = @serveur.reservers.all
        # reservation = Reserver.find(params[:id])
        if reservations
          render json: reservations, status: 200
        else
          render json: { errors: "reservation not found "}
      end
    end

      # def new
      #   reservation = Reserver.new
      # end

      # def create
      #   reservation = Serveur.find(params[:id])
      #   reservations = reservation.reservers.built(reservation_params)
      
      #    if  reservations.save

      #     # render json: { msg: "Bjr" }
          
      #   #   # reservation.update(status:1)
      #     render json: reservations, status: 200
          
          
      #   else
      #     render json: { errors: "creating erros" }

      #   end
      # end

      def new
        # serveur = Serveur.find(1) 
        # reservation = Reserver.new
        @serveur = Serveur.find(params[:serveur_id])  
        @reservation = @serveur.reservers.build
      end
      
      def create
        # @reserva= Reserver.new(reservation_params)
        # serveur = Serveur.find(1)   
        # reservation = Reserver.new
        @serveur = Serveur.find(params[:serveur_id])
        @conteur = @serveur.reservers.count
        # render json: @conteur, status: 200
         if @serveur.status== 'free' and (@conteur<4)
          @reservation = @serveur.reservers.build(reservation_params)
          @reservation.save 
          @reservation.errors
           render json: @reservation.errors, status: 200
         
          

         else
        #   # render json: { errors: "creating erros" }
         render json: {message: "reservation not created "}
          
    
        
         end
      end
      

      def edit
        reservation = Reserver.find(params[:id])
      end

      def update
        reservation = Reserver.find(params[:id])

        if reservation

          reservation.update(reservation_params)
          render json: {message: "Updated successfully"}
        else
          render json: { errors: "updating erros" }

      end
    end

    def destroy
      deliberation = Reserver.find(params[:id])
      if deliberation
      deliberation.destroy

      render json: {message: "Server libre "}

    end
  end

 

      private
      def reservation_params
        params.require(:reservation).permit(:nom , :serveur_name ,  :specialite , :periode ,:status)
        
      
      end



    
  end 

