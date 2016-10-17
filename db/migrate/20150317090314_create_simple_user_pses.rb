class CreateSimpleUserPses < ActiveRecord::Migration
  def change
    create_table :simple_user_pses do |t|
      t.text :name
      t.text :eponimo
      t.text :address
      t.text :company
      t.text :phone
      t.text :email

      t.timestamps
    end
  end
end
