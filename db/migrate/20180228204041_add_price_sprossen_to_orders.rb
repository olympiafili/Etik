class AddPriceSprossenToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_sprossen, :float
  end
end
