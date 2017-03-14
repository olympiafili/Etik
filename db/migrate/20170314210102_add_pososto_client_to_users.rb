class AddPosostoClientToUsers < ActiveRecord::Migration
  def change
    add_column :users, :pososto_client, :float
  end
end
