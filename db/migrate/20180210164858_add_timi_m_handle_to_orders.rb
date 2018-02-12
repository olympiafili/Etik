class AddTimiMHandleToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_handle, :float
  end
end
