class AddPriceExtraToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_rolou, :float
    add_column :orders, :price_odoigou, :float
    add_column :orders, :price_persidas, :float
    add_column :orders, :price_tzamiou, :float
    add_column :orders, :price_profil, :float
    add_column :orders, :price_tupou, :float
  end
end
