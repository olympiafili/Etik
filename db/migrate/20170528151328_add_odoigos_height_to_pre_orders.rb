class AddOdoigosHeightToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :odoigos_height, :float
  end
end
