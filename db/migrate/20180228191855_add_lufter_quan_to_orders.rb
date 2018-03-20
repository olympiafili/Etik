class AddLufterQuanToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :lufter_quan, :float
  end
end
