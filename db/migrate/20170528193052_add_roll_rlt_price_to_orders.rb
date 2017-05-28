class AddRollRltPriceToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :roll_rlt_price, :float
  end
end
