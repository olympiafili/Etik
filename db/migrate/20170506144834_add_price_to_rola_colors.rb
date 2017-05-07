class AddPriceToRolaColors < ActiveRecord::Migration
  def change
    add_column :rola_colors, :price, :float
  end
end
