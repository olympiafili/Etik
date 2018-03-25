class AddKoppToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :kopp, :string
  end
end
