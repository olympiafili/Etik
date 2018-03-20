class AddFigurenToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :figuren, :string
  end
end
