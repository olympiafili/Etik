class AddConstrToMaterials < ActiveRecord::Migration
  def change
    add_column :materials, :constructors, :text
  end
end
