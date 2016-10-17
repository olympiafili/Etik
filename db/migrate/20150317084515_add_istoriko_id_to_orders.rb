class AddIstorikoIdToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :istoriko_id, :integer
  end
end
