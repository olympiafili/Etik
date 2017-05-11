class AddRatQuanToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :rat_quan, :int
  end
end
