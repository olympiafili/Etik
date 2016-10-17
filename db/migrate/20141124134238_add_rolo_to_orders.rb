class AddRoloToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :rolo, :string
  end
end
