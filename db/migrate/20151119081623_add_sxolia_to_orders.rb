class AddSxoliaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :sxolia, :text
  end
end
