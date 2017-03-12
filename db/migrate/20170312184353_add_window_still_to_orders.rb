class AddWindowStillToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :window_still, :string
  end
end
