class AddCanvasToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :canvas, :string
  end
end
