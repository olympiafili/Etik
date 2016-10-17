class AddProstasiaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :prostasia_name, :text
    add_column :orders, :prostasia_price, :float
  end
end
