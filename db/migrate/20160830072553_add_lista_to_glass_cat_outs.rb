class AddListaToGlassCatOuts < ActiveRecord::Migration
  def change
    add_column :glass_cat_outs, :lista, :text
  end
end
