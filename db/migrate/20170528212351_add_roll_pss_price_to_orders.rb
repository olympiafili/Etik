class AddRollPssPriceToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :roll_pss_price, :float
  end
end
