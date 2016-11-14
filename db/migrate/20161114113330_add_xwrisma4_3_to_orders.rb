class AddXwrisma43ToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :xwrisma4_3, :float
  end
end
