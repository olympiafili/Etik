class AddRoloWidthToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :rolo_width, :float
  end
end
