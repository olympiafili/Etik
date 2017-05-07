class AddPriceColorRolouToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_color_rolou, :float
  end
end
