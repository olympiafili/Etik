class AddPriceMToRolaColors < ActiveRecord::Migration
  def change
    add_column :rola_colors, :price_m, :float
  end
end
