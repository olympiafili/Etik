class AddRollRdmToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :roll_rdm, :string
  end
end
