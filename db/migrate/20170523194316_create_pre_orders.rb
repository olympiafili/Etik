class CreatePreOrders < ActiveRecord::Migration
  def change
    create_table :pre_orders do |t|
      t.string :open_category_code
      t.string :material_code
      t.string :constructor_code
      t.string :system_code
      t.string :line_code

      t.timestamps
    end
  end
end
