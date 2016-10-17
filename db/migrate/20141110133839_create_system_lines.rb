class CreateSystemLines < ActiveRecord::Migration
  def change
    create_table :system_lines do |t|
      t.integer :system_id
      t.integer :line_id

      t.timestamps
    end
  end
end
