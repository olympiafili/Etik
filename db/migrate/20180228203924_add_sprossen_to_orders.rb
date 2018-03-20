class AddSprossenToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :sprossen, :string
  end
end
