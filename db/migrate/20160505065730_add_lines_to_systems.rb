class AddLinesToSystems < ActiveRecord::Migration
  def change
    add_column :systems, :lines, :text
  end
end
