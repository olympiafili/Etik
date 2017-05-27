class AddPersidaHeightToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :persida_height, :float
  end
end
