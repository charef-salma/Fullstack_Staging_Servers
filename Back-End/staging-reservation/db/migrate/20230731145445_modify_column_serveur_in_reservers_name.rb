class ModifyColumnServeurInReserversName < ActiveRecord::Migration[6.0]
  def change
    # rename_column :table_name, :old_column_name, :new_column_name
    rename_column :reservers, :serveur, :serveur_name
  end
end
