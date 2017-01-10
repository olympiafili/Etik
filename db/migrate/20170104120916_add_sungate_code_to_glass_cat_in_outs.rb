class AddSungateCodeToGlassCatInOuts < ActiveRecord::Migration
  def change
    add_column :glass_cat_in_outs, :sungate_code, :string
  end
end
