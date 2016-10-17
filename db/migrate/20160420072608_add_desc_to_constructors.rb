class AddDescToConstructors < ActiveRecord::Migration
  def change
    add_column :constructors, :desc, :text
  end
end
