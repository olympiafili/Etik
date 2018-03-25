class AddKoppQuanToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :kopp_quan, :float
  end
end
