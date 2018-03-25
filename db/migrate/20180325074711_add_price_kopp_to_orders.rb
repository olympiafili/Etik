class AddPriceKoppToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_kopp, :float
  end
end
