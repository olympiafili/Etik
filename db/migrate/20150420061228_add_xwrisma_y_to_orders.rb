class AddXwrismaYToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :xwrisma_y_1, :float
    add_column :orders, :xwrisma_y_2, :float
  end
end
