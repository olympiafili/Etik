class CreateWindowStillSubCats < ActiveRecord::Migration
  def change
    create_table :window_still_sub_cats do |t|
      t.string :name
      t.string :sungate_code

      t.timestamps
    end
  end
end
