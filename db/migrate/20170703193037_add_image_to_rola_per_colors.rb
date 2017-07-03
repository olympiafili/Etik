class AddImageToRolaPerColors < ActiveRecord::Migration
  def change
    add_column :rola_per_colors, :image, :string
  end
end
