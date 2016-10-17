class AddTzamia2ToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :tzamia2, :text
    add_column :orders, :price_tzamiou2, :float
  end
end
