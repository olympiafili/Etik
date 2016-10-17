class AddProfilDeksiaNewNamesToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :profil_deksia_1, :text
    add_column :orders, :profil_deksia_2, :text
    add_column :orders, :profil_deksia_3, :text
  end
end
