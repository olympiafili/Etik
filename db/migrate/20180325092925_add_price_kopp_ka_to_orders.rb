class AddPriceKoppKaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_kopp_ka, :float
  end
end
