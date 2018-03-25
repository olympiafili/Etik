class AddTimiMKoppDeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_kopp_de, :float
  end
end
