class AddCategoryToProfils < ActiveRecord::Migration
  def change
    add_column :profils, :category, :integer
  end
end
