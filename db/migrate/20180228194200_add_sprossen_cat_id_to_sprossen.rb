class AddSprossenCatIdToSprossen < ActiveRecord::Migration
  def change
    add_column :sprossens, :sprossen_cat_id, :integer
  end
end
