class CreateSprossenCats < ActiveRecord::Migration
  def change
    create_table :sprossen_cats do |t|
      t.string :name
      t.string :sungate_code

      t.timestamps
    end
  end
end
