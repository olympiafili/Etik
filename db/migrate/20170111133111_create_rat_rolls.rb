class CreateRatRolls < ActiveRecord::Migration
  def change
    create_table :rat_rolls do |t|
      t.string :name
      t.float :price
      t.string :sungate_code
      t.integer :order

      t.timestamps
    end
  end
end
