class AddRollPfmToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :roll_pfm, :string
  end
end
