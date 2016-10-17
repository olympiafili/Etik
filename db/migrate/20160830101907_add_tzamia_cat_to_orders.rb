class AddTzamiaCatToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :tzami0_cat, :integer
    add_column :orders, :tzami1_cat, :integer
    add_column :orders, :tzami2_cat, :integer
  end
end
