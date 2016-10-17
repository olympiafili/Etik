class CreatePersides < ActiveRecord::Migration
  def change
    create_table :persides do |t|
      t.string :name
      t.float :price

      t.timestamps
    end
  end
end
