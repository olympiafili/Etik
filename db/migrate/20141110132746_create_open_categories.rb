class CreateOpenCategories < ActiveRecord::Migration
  def change
    create_table :open_categories do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
