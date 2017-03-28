class AddWindowStillCodeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :window_still_code, :string
  end
end
