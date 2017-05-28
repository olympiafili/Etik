class AddRollPssToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :roll_pss, :string
  end
end
