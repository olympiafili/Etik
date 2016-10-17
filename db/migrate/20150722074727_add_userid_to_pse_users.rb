class AddUseridToPseUsers < ActiveRecord::Migration
  def change
    add_column :pse_users, :user_id, :text
  end
end
