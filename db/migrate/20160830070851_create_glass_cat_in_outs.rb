class CreateGlassCatInOuts < ActiveRecord::Migration
  def change
    create_table :glass_cat_in_outs do |t|
      t.string :name
      t.string :code

      t.timestamps
    end
  end
end
