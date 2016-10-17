class CreateSystems < ActiveRecord::Migration
  def change
    create_table :systems do |t|
      t.string :name
      t.integer :constructor_id

      t.timestamps
    end
  end
end
