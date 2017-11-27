class AddLockToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :lock, :string
  end
end
