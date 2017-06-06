class ChangeColumnsForOrders < ActiveRecord::Migration
  def change
  	change_column(:orders, :price_equipment, :string)
  end
end
