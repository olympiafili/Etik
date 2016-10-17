class CreateCatTzamia < ActiveRecord::Migration
  def change
    create_table :cat_tzamia do |t|
      t.text :name
      t.text :code

      t.timestamps
    end
  end
end
