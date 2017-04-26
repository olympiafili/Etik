class AddRollRatPriceToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :roll_rat_price, :float
  end
end
