class AddRollPfmPriceToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :roll_pfm_price, :float
  end
end
