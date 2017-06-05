class AddEquipmentToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :equipment, :string
  end
end
