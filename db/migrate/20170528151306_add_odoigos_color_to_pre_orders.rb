class AddOdoigosColorToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :odoigos_color, :string
  end
end
