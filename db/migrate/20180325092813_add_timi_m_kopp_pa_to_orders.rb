class AddTimiMKoppPaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_kopp_pa, :float
  end
end
