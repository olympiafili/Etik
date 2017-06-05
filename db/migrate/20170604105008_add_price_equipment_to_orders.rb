class AddPriceEquipmentToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_equipment, :float
  end
end
