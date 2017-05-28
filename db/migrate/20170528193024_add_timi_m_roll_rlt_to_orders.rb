class AddTimiMRollRltToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_roll_rlt, :float
  end
end
