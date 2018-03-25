class AddKoppPaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :kopp_pa, :string
  end
end
