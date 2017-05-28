class AddCategoryToRollGuides < ActiveRecord::Migration
  def change
    add_column :roll_guides, :category, :string
  end
end
