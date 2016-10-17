class CreateGlassCatOuts < ActiveRecord::Migration
  def change
    create_table :glass_cat_outs do |t|
      t.string :name
      t.string :code

      t.timestamps
    end
  end
end
