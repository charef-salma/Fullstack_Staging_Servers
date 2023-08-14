class CreateServeurs < ActiveRecord::Migration[6.0]
  def change
    create_table :serveurs do |t|
      t.string :nom
      t.string :status

      t.timestamps
    end
  end
end
