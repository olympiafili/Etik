class AddTimiMRollPfmToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_roll_pfm, :float
  end
end
