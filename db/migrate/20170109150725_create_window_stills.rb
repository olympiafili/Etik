class CreateWindowStills < ActiveRecord::Migration
  def change
    create_table :window_stills do |t|
      t.string :name
      t.float :price
      t.integer :window_still_cat_id
      t.string :sungate_code

      t.timestamps
    end
  end
end
