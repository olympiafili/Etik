class AddSungateCodeToCatPanels < ActiveRecord::Migration
  def change
    add_column :cat_panels, :sungate_code, :string
  end
end
