class AddHandleToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :handle, :string
  end
end
