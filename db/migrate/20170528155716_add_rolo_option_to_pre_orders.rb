class AddRoloOptionToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :rolo_option, :string
  end
end
