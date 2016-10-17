class AddSuperApliTimiToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :super_apli_timi, :float
  end
end
