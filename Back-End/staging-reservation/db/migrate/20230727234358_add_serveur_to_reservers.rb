class AddServeurToReservers < ActiveRecord::Migration[6.0]
  def change
    add_reference :reservers, :serveur, null: true, foreign_key: true
  end
end
