class CreateOpenTypes < ActiveRecord::Migration
  def change
    create_table :open_types do |t|
      t.string :name
      t.integer :max_height
      t.integer :min_height
      t.integer :max_width
      t.integer :min_width
      t.string :image
      t.integer :leaf_id
      t.integer :open_categorie_id

      t.timestamps
    end
  end
end
