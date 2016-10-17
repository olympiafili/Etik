class AddSystemsToConstructors < ActiveRecord::Migration
  def change
    add_column :constructors, :systems, :text
  end
end
