class CreateProfils < ActiveRecord::Migration
  def change
    create_table :profils do |t|
      t.string :name
      t.float :price

      t.timestamps
    end
  end
end
