class AddPricelistToPanels < ActiveRecord::Migration
  def change
    add_column :panels, :pricelist, :string
  end
end
