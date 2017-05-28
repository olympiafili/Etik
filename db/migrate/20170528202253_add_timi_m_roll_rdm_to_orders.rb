class AddTimiMRollRdmToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_roll_rdm, :float
  end
end
