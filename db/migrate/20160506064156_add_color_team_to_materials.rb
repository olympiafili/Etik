class AddColorTeamToMaterials < ActiveRecord::Migration
  def change
    add_column :materials, :color_team, :text
  end
end
