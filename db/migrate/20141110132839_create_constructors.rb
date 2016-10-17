class CreateConstructors < ActiveRecord::Migration
  def change
    create_table :constructors do |t|
      t.string :name

      t.timestamps
    end
  end
end
