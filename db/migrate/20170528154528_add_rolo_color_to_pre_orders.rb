class AddRoloColorToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :rolo_color, :string
  end
end
