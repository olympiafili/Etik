class AddCsvToOpenTypes < ActiveRecord::Migration
  def change
    add_column :open_types, :csv, :string
  end
end
