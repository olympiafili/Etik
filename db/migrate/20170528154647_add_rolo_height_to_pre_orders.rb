class AddRoloHeightToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :rolo_height, :float
  end
end
