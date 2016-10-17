class AddProfilPanwToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :profil_panw_1, :text
    add_column :orders, :profil_panw_2, :text
    add_column :orders, :profil_panw_3, :text
    add_column :orders, :profil_panw_arithmos_1, :int
    add_column :orders, :profil_panw_arithmos_2, :int
    add_column :orders, :profil_panw_arithmos_3, :text
    add_column :orders, :timi_profil_panw_1, :float
    add_column :orders, :timi_profil_panw_2, :float
    add_column :orders, :timi_profil_panw_3, :float
  end
end
