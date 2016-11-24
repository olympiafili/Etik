class AddSungateCodeToOpenCategories < ActiveRecord::Migration
  def change
    add_column :open_categories, :sungate_code, :string
  end
end
