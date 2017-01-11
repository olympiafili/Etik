class AddUnitToRatRolls < ActiveRecord::Migration
  def change
    add_column :rat_rolls, :unit, :string
  end
end
