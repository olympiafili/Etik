class AddTyposCodeToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :typos_code, :string
  end
end
