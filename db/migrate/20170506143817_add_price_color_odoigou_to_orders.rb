class AddPriceColorOdoigouToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_color_odoigou, :float
  end
end
