class CreateLeafs < ActiveRecord::Migration
  def change
    create_table :leafs do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
