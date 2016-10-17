class AddAuksonToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :aukson, :integer
  end
end
