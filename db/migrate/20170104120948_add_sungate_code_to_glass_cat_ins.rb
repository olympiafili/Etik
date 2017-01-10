class AddSungateCodeToGlassCatIns < ActiveRecord::Migration
  def change
    add_column :glass_cat_ins, :sungate_code, :string
  end
end
