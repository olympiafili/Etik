class AddTyposColorToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :typos_color, :string
  end
end
