class CreateRolaOdColors < ActiveRecord::Migration
  def change
    create_table :rola_od_colors do |t|
      t.string :name
      t.string :sungate_code
      t.float :price
      t.float :category
      t.string :image
      t.string :code
      t.integer :order

      t.timestamps
    end
  end
end
