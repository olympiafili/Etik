class AddPriceKoppPaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_kopp_pa, :float
  end
end
