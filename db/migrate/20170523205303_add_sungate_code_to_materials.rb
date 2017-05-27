class AddSungateCodeToMaterials < ActiveRecord::Migration
  def change
    add_column :materials, :sungate_code, :string
  end
end
