class CreatePseUsers < ActiveRecord::Migration
  def change
    create_table :pse_users do |t|
      t.text :name
      t.text :eponimo
      t.text :address
      t.text :company
      t.integer :phone
      t.text :email

      t.timestamps
    end
  end
end
