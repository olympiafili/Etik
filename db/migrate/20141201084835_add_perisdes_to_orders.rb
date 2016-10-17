class AddPerisdesToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :persida, :string
    add_column :orders, :color_persidas, :string
  end
end
