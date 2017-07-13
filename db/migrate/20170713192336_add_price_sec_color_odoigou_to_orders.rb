class AddPriceSecColorOdoigouToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_sec_color_odoigou, :float
  end
end
