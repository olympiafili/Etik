class AddSungateCodeToColorTeams < ActiveRecord::Migration
  def change
    add_column :color_teams, :sungate_code, :string
  end
end
