class CreateColors < ActiveRecord::Migration
  def change
    create_table :colors do |t|
      t.string :image
      t.string :name
      t.float :epivarinsi

      t.timestamps
    end
  end
end
