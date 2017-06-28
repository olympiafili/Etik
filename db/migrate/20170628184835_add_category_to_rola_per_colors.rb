class AddCategoryToRolaPerColors < ActiveRecord::Migration
  def change
    add_column :rola_per_colors, :category, :float
  end
end
