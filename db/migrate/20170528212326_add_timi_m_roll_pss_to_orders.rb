class AddTimiMRollPssToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_roll_pss, :float
  end
end
