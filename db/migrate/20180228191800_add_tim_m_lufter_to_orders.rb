class AddTimMLufterToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_lufter, :float
  end
end
