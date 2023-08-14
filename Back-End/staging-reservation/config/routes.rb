Rails.application.routes.draw do
  get "/reservations", to: "reservations#index"
  get '/reservation_history', to: 'reservations#history'

  
  resources :serveurs , controller: 'serveur' do
    member do
      put 'update_status'  ,to: 'serveur#update_status',controller:'serveur'
    end
    member do
      put 'update_free'  ,to: 'serveur#update_free',controller:'serveur'
    end
    member do
      get 'reservation_serveur'  ,to: 'serveur#reservation_serveur'
    end  
    member do
      get'show_reservations' ,to: 'reservations#show_reservations'
    end  
      resources :reservations
         
  

  # get "/reservations", to: "reservations#index"
  # get "/reservations/status/:id", to: "reservations#Statuslist"
  # get "/reservations/:id", to: "reservations#show"
  # post "/reservations", to: "reservations#create"
  # put "/reservations/:id", to:  "reservations#update"
  # delete "/reservations/:id", to:  "reservations#destroy"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root "serveurs#index"
  # get "/serveurs", to: "serveur#index"
  # post "/serveurs", to: "serveur#create"
  # get "/serveurs/:id/reservations", to: "serveur#show"
  # get "/serveur",to: "serveur#status"


  end
end
