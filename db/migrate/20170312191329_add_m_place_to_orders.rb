class AddMPlaceToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :m_place, :string
  end
end
