class AddHeightToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :height, :float
  end
end
