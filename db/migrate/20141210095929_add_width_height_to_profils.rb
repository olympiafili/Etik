class AddWidthHeightToProfils < ActiveRecord::Migration
  def change
    add_column :profils, :width, :integer
    add_column :profils, :height, :integer
  end
end
