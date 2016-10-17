class AddPosotoitaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :posotoita, :integer
  end
end
