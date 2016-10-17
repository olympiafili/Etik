class AddImageToMaterials < ActiveRecord::Migration
  def change
    add_column :materials, :image, :string
  end
end
