class AddPriceFigurenToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_figuren, :float
  end
end
