class AddPriceWindowStillToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_window_still, :float
  end
end
