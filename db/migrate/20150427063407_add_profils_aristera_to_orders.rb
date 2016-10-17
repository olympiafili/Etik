class AddProfilsAristeraToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :profil_aristera_1, :text
    add_column :orders, :profil_aristera_2, :text
    add_column :orders, :profil_aristera_3, :text
    add_column :orders, :profil_aristera_arithmos_1, :int
    add_column :orders, :profil_aristera_arithmos_2, :int
    add_column :orders, :profil_aristera_arithmos_3, :int
    add_column :orders, :timi_profil_aristera_1, :float
    add_column :orders, :timi_profil_aristera_2, :float
    add_column :orders, :timi_profil_aristera_3, :float
  end
end
