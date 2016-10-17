class CreateRollGuides < ActiveRecord::Migration
  def change
    create_table :roll_guides do |t|
      t.string :name
      t.float :price

      t.timestamps
    end
  end
end
