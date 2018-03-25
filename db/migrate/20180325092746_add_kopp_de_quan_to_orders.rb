class AddKoppDeQuanToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :kopp_de_quan, :float
  end
end
