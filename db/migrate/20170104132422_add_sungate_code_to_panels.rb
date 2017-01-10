class AddSungateCodeToPanels < ActiveRecord::Migration
  def change
    add_column :panels, :sungate_code, :string
  end
end
