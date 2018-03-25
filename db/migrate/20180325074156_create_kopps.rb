class CreateKopps < ActiveRecord::Migration
  def change
    create_table :kopps do |t|
      t.string :name
      t.float :price
      t.string :sungate_code

      t.timestamps
    end
  end
end
