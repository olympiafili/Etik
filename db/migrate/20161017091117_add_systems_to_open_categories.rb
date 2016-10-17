class AddSystemsToOpenCategories < ActiveRecord::Migration
  def change
    add_column :open_categories, :systems, :string
  end
end
