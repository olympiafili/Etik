class AddKoppDeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :kopp_de, :string
  end
end
