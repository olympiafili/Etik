class CreateParaggelia < ActiveRecord::Migration
  def change
    create_table :paraggelia do |t|
      t.integer :user
      t.integer :customer

      t.timestamps
    end
  end
end
