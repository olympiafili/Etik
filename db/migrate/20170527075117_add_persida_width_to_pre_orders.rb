class AddPersidaWidthToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :persida_width, :float
  end
end
