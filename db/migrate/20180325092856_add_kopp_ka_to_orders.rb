class AddKoppKaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :kopp_ka, :string
  end
end
