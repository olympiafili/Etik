class AddTimiMPlaceToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_place, :float
  end
end
