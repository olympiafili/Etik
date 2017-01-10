class AddSungateCodeToGlassCatOuts < ActiveRecord::Migration
  def change
    add_column :glass_cat_outs, :sungate_code, :string
  end
end
