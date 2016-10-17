class CreateGlassCatIns < ActiveRecord::Migration
  def change
    create_table :glass_cat_ins do |t|
      t.string :name
      t.string :code

      t.timestamps
    end
  end
end
