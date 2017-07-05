class AddOrderToRolaEpikColors < ActiveRecord::Migration
  def change
    add_column :rola_epik_colors, :order, :int
  end
end
