class AddRollRdmToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :roll_rdm, :string
  end
end
