class AddDescriptionToPanels < ActiveRecord::Migration
  def change
    add_column :panels, :description, :text
  end
end
