class AddDirectionToPanels < ActiveRecord::Migration
  def change
    add_column :panels, :direction, :string
  end
end
