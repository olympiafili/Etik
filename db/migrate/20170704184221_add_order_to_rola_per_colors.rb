class AddOrderToRolaPerColors < ActiveRecord::Migration
  def change
    add_column :rola_per_colors, :order, :int
  end
end
