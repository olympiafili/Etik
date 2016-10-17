class AddSungateToUsers < ActiveRecord::Migration
  def change
    add_column :users, :sungate_name, :text
    add_column :users, :sungate_code, :text
  end
end
