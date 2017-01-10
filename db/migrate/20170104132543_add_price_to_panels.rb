class AddPriceToPanels < ActiveRecord::Migration
  def change
    add_column :panels, :price, :float
  end
end
