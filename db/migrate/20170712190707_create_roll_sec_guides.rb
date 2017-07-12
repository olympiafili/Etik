class CreateRollSecGuides < ActiveRecord::Migration
  def change
    create_table :roll_sec_guides do |t|
      t.string :name
      t.float :price
      t.string :image
      t.string :code
      t.integer :order
      t.string :sungate_code

      t.timestamps
    end
  end
end
