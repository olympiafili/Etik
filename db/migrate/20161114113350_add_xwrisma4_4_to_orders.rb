class AddXwrisma44ToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :xwrisma4_4, :float
  end
end
