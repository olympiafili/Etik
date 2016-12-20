class CreateSupplierPanels < ActiveRecord::Migration
  def change
    create_table :supplier_panels do |t|
      t.string :name
      t.string :panel

      t.timestamps
    end
  end
end
