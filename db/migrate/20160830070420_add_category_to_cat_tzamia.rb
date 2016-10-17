class AddCategoryToCatTzamia < ActiveRecord::Migration
  def change
    add_column :cat_tzamia, :category, :integer
  end
end
