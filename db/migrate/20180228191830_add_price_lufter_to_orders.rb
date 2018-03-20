class AddPriceLufterToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_lufter, :float
  end
end
