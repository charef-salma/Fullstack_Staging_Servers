class CreateReservers < ActiveRecord::Migration[6.0]
  def change
      create_table :reservers do |t|
        t.string :nom
        t.string :serveur_name
        t.string :specialite
        t.string :periode 
        t.integer :status, :default => 1
        t.belongs_to :serveur
        t.timestamps
      end
  
    end
  
end
