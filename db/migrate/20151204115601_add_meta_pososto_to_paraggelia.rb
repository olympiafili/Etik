class AddMetaPosostoToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :meta_pososto, :float
  end
end
