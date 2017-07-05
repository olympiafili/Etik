class ChangeTimiMwindowStillForOrders < ActiveRecord::Migration
  def change
  	change_column :orders, :timi_m_window_still, :string
  end
end
