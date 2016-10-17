class CreateRolaEpiks < ActiveRecord::Migration
  def change
    create_table :rola_epiks do |t|
      t.string :name
      t.float :height
      t.float :width
      t.float :price
      t.integer :epikathimeno_id

      t.timestamps
    end
  end
end
