class AddSurchargeToOpenCategories < ActiveRecord::Migration
  def change
    add_column :open_categories, :surcharge, :float
  end
end
