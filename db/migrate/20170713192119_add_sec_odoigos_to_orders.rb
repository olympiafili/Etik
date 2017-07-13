class AddSecOdoigosToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :sec_odoigos, :string
  end
end
