class AddSprossenQuanToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :sprossen_quan, :float
  end
end
