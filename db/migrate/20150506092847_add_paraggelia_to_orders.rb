class AddParaggeliaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :paraggelia_id, :integer
  end
end
