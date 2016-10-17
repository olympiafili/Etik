class AddKlapToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :klap, :string
  end
end
