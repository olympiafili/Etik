class AddTableToOpenTypes < ActiveRecord::Migration
  def change
    add_column :open_types, :table, :text
  end
end
