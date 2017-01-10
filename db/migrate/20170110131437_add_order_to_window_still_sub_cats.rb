class AddOrderToWindowStillSubCats < ActiveRecord::Migration
  def change
    add_column :window_still_sub_cats, :order, :integer
  end
end
