class AddLastixaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :lastixa, :string
  end
end
