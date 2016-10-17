class AddMetafwrikaToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :metaforika, :integer
  end
end
