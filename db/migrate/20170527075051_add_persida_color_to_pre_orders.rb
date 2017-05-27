class AddPersidaColorToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :persida_color, :string
  end
end
