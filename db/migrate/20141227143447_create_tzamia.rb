class CreateTzamia < ActiveRecord::Migration
  def change
    create_table :tzamia do |t|
      t.string :name
      t.float :price
      t.integer :cat_tzamia_id

      t.timestamps
    end
  end
end
