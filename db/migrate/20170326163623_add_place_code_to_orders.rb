class AddPlaceCodeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :place_code, :string
  end
end
