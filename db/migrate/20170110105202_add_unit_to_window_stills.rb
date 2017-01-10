class AddUnitToWindowStills < ActiveRecord::Migration
  def change
    add_column :window_stills, :unit, :string
  end
end
