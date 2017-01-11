class CreateRdmRolls < ActiveRecord::Migration
  def change
    create_table :rdm_rolls do |t|
      t.string :name
      t.float :price
      t.string :sungate_code
      t.integer :order
      t.string :unit

      t.timestamps
    end
  end
end
