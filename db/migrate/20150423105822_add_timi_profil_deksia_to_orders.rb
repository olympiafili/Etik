class AddTimiProfilDeksiaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :profil_deksia_arithmos_1, :int
    add_column :orders, :profil_deksia_arithmos_2, :int
    add_column :orders, :profil_deksia_arithmos_3, :int
    add_column :orders, :timi_profil_deksia_1, :float
    add_column :orders, :timi_profil_deksia_2, :float
    add_column :orders, :timi_deksia_profil_3, :float
  end
end
