class CreatePricelists < ActiveRecord::Migration
  def change
    create_table :pricelists do |t|
      t.integer :width
      t.integer :height
      t.float :price
      t.float :code

      t.timestamps
    end
  end
end
