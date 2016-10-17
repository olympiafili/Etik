class AddImagesToEpikathimenos < ActiveRecord::Migration
  def change
    add_column :epikathimenos, :image, :string
  end
end
