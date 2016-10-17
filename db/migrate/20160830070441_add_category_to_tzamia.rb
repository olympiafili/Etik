class AddCategoryToTzamia < ActiveRecord::Migration
  def change
    add_column :tzamia, :category, :integer
  end
end
