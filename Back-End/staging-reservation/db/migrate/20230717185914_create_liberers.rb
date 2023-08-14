class CreateLiberers < ActiveRecord::Migration[6.0]
  def change
    create_table :liberers do |t|
      t.string :nom
      t.string :serveurs

      t.timestamps
    end
  end
end
