class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :open_categorie_id
      t.integer :material_id
      t.integer :constructor_id
      t.integer :system_id
      t.integer :line_id
      t.integer :leaf_id
      t.integer :main_color_id
      t.integer :leaf_color_id
      t.integer :right_color_id
      t.integer :left_color_id
      t.integer :up_color_id
      t.integer :down_color_id
      t.integer :open_type_id
      t.float :width
      t.float :height
      t.float :price
      t.float :price_extra

      t.timestamps
    end
  end
end
