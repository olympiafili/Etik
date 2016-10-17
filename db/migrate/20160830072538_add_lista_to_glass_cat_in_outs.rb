class AddListaToGlassCatInOuts < ActiveRecord::Migration
  def change
    add_column :glass_cat_in_outs, :lista, :text
  end
end
