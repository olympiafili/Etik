class AddSurchargeLineToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :surcharge_line, :float
  end
end
