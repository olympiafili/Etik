class CreateRolaEksos < ActiveRecord::Migration
  def change
    create_table :rola_eksos do |t|
      t.string :name
      t.float :height
      t.float :width
      t.float :price
      t.integer :rola_ekso_id

      t.timestamps
    end
  end
end
