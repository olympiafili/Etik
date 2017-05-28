class AddRoloCodeToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :rolo_code, :string
  end
end
