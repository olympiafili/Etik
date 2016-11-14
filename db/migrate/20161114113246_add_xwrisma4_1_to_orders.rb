class AddXwrisma41ToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :xwrisma4_1, :float
  end
end
