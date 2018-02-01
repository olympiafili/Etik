class CreateLocks < ActiveRecord::Migration
  def change
    create_table :locks do |t|
      t.string :name
      t.float :price
      t.string :sungate_code
    end
  end
end
