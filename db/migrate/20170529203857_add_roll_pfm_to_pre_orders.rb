class AddRollPfmToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :roll_pfm, :string
  end
end
