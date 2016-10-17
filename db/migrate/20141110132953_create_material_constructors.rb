class CreateMaterialConstructors < ActiveRecord::Migration
  def change
    create_table :material_constructors do |t|
      t.integer :material_id
      t.integer :constructor_id

      t.timestamps
    end
  end
end
