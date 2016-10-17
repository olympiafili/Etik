class CreateColorTeams < ActiveRecord::Migration
  def change
    create_table :color_teams do |t|
      t.string :color_team_name
      t.float :epivarinsi
      t.text :colors

      t.timestamps
    end
  end
end
