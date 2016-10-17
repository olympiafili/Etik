class AddPosostoToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :pososto, :integer
  end
end
