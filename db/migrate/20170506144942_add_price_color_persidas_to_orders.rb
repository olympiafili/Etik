class AddPriceColorPersidasToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_color_persidas, :float
  end
end
