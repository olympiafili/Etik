class AddRollRdmPriceToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :roll_rdm_price, :float
  end
end
