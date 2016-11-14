class AddXwrisma42ToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :xwrisma4_2, :float
  end
end
