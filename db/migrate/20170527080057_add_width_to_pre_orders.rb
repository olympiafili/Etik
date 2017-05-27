class AddWidthToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :width, :float
  end
end
