class AddKoppKaQuanToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :kopp_ka_quan, :float
  end
end
