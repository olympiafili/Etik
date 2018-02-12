class AddHandleQuanToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :handle_quan, :float
  end
end
