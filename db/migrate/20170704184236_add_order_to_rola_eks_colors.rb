class AddOrderToRolaEksColors < ActiveRecord::Migration
  def change
    add_column :rola_eks_colors, :order, :int
  end
end
