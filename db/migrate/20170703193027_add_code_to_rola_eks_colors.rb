class AddCodeToRolaEksColors < ActiveRecord::Migration
  def change
    add_column :rola_eks_colors, :code, :string
  end
end
