class AddNameCompanyToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :name, :text
    add_column :paraggelia, :company, :text
  end
end
