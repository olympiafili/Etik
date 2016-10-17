class AddEponimoToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :eponimo, :text
  end
end
