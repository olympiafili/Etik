class AddKoppPaQuanToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :kopp_pa_quan, :float
  end
end
