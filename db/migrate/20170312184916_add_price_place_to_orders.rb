class AddPricePlaceToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_place, :float
  end
end
