class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name
      t.float :price
      t.string :unit

      t.timestamps
    end
  end
end
