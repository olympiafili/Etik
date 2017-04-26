class AddRollRatToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :roll_rat, :string
  end
end
