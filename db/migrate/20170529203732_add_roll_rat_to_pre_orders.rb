class AddRollRatToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :roll_rat, :string
  end
end
