class CreateRolaColors < ActiveRecord::Migration
  def change
    create_table :rola_colors do |t|
      t.string :name
      t.string :image
      t.string :code

      t.timestamps
    end
  end
end
