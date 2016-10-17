class AddOpenTypeToLines < ActiveRecord::Migration
  def change
    add_column :lines, :open_types, :text
  end
end
