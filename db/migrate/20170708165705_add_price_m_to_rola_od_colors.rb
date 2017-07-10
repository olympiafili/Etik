class AddPriceMToRolaOdColors < ActiveRecord::Migration
  def change
    add_column :rola_od_colors, :price_m, :float
  end
end
