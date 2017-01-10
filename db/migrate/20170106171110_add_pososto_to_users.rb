class AddPosostoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :pososto, :float
  end
end
