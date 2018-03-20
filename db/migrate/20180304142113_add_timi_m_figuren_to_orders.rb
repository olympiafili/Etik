class AddTimiMFigurenToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_figuren, :float
  end
end
