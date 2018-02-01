class AddOpenCategorieSurchargeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :open_categorie_surcharge, :float
  end
end
