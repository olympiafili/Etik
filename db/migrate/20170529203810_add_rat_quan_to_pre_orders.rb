class AddRatQuanToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :rat_quan, :float
  end
end
