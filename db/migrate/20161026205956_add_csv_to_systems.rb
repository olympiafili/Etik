class AddCsvToSystems < ActiveRecord::Migration
  def change
    add_column :systems, :csv, :string
  end
end
