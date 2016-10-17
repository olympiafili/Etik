class AddTyposCodeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :typos_code, :string
  end
end
