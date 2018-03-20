class CreateFigurens < ActiveRecord::Migration
  def change
    create_table :figurens do |t|
      t.string :name
      t.float :price
      t.string :sungate_code

      t.timestamps
    end
  end
end
