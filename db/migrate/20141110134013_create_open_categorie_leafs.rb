class CreateOpenCategorieLeafs < ActiveRecord::Migration
  def change
    create_table :open_categorie_leafs do |t|
      t.integer :open_categorie_id
      t.integer :leaf_id

      t.timestamps
    end
  end
end
