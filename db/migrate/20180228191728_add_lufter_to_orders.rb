class AddLufterToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :lufter, :string
  end
end
