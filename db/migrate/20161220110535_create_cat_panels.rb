class CreateCatPanels < ActiveRecord::Migration
  def change
    create_table :cat_panels do |t|
      t.string :name
      t.string :panel

      t.timestamps
    end
  end
end
