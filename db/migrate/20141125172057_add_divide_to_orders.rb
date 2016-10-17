class AddDivideToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :xwrisma1, :float
    add_column :orders, :xwrisma2, :float
    add_column :orders, :xwrisma3_1, :float
    add_column :orders, :xwrisma3_2, :float
    add_column :orders, :xwrisma3_3, :float
  end
end
