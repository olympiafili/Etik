class AddTimiMEquipmentToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_equipment, :float
  end
end
