class AddTimiMRollRatToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_roll_rat, :float
  end
end
