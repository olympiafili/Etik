class AddTimiMKoppKaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_kopp_ka, :float
  end
end
