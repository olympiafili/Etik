class AddKapoiaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :price_update, :float
    add_column :orders, :price_sum, :float
    add_column :orders, :price_new, :float
    add_column :orders, :height_new, :float
    add_column :orders, :lastixo, :int
    add_column :orders, :profil_panw, :text
    add_column :orders, :profil_katw, :text
    add_column :orders, :profil_deksia, :text
    add_column :orders, :profil_aristera, :text
    add_column :orders, :posotita_p, :int
    add_column :orders, :posotita_k, :int
    add_column :orders, :posotita_d, :int
    add_column :orders, :posotita_a, :int
    add_column :orders, :tzamia, :text
    add_column :orders, :typos, :text
    add_column :orders, :color_typos, :text
    add_column :orders, :image, :text
    add_column :orders, :odoigos, :text
    add_column :orders, :color_odoigou, :text
    add_column :orders, :pse, :int
    add_column :orders, :in_out, :int
  end
end
