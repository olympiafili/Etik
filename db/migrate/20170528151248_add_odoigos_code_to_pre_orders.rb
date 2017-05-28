class AddOdoigosCodeToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :odoigos_code, :string
  end
end
