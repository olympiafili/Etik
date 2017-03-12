class AddPlaceToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :place, :string
  end
end
