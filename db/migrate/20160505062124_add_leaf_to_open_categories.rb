class AddLeafToOpenCategories < ActiveRecord::Migration
  def change
    add_column :open_categories, :leaf, :text
  end
end
