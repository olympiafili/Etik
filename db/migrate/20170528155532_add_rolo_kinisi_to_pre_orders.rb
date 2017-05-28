class AddRoloKinisiToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :rolo_kinisi, :string
  end
end
