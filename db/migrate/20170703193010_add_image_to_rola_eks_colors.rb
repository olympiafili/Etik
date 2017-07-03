class AddImageToRolaEksColors < ActiveRecord::Migration
  def change
    add_column :rola_eks_colors, :image, :string
  end
end
