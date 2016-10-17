class CreateTypoiProstasia < ActiveRecord::Migration
  def change
    create_table :typoi_prostasia do |t|
      t.text :name
      t.float :price
      t.integer :width
      t.integer :height

      t.timestamps
    end
  end
end
