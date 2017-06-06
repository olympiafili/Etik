class ChangeColumns2ForOrders < ActiveRecord::Migration
  def change
  	change_column(:orders, :timi_m_equipment, :string)
  end
end
