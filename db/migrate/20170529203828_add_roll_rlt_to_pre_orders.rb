class AddRollRltToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :roll_rlt, :string
  end
end
