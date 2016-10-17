class AddImagesToEksoterikas < ActiveRecord::Migration
  def change
    add_column :eksoterikas, :image, :string
  end
end
