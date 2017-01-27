class AddSurchargeColorToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :surcharge_color, :float
  end
end
