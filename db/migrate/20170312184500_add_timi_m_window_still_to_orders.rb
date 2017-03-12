class AddTimiMWindowStillToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_window_still, :float
  end
end
