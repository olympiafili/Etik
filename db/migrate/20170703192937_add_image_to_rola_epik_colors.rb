class AddImageToRolaEpikColors < ActiveRecord::Migration
  def change
    add_column :rola_epik_colors, :image, :string
  end
end
