class AddDerollToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :deroll, :string
  end
end
