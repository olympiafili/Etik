class AddRollPssToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :roll_pss, :string
  end
end
