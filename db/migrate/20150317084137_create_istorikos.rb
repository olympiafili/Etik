class CreateIstorikos < ActiveRecord::Migration
  def change
    create_table :istorikos do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
