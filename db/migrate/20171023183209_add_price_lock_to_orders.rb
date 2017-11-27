class AddPriceLockToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_lock, :float
  end
end
