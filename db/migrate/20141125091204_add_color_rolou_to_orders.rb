class AddColorRolouToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :color_rolou, :string
  end
end
