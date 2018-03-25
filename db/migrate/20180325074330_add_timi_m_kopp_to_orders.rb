class AddTimiMKoppToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_kopp, :float
  end
end
