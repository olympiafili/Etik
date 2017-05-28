class AddRollRltToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :roll_rlt, :string
  end
end
