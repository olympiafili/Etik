class AddPriceKoppDeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_kopp_de, :float
  end
end
