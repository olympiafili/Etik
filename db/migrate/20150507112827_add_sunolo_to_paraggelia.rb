class AddSunoloToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :sum, :float
  end
end
