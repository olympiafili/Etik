class AddPriceDealerToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_dealer, :float
  end
end
