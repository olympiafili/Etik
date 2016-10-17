class AddListaToGlassCatIns < ActiveRecord::Migration
  def change
    add_column :glass_cat_ins, :lista, :text
  end
end
