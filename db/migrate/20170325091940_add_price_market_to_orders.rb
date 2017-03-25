class AddPriceMarketToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_market, :float
  end
end
