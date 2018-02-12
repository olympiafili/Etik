class AddPriceHandleToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_handle, :float
  end
end
