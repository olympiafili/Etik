class AddTimiMLockToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_lock, :float
  end
end
