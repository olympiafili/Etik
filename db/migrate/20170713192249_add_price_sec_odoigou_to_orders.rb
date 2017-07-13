class AddPriceSecOdoigouToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_sec_odoigou, :float
  end
end
