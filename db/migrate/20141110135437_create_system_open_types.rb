class CreateSystemOpenTypes < ActiveRecord::Migration
  def change
    create_table :system_open_types do |t|
      t.integer :open_type_id
      t.integer :system_id

      t.timestamps
    end
  end
end
