class AddWindowStillCatIdToWindowStillSubCats < ActiveRecord::Migration
  def change
    add_column :window_still_sub_cats, :window_still_cat_id, :integer
  end
end
