class AddSurchargeColorEkswToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :surcharge_color_eksw, :float
  end
end
