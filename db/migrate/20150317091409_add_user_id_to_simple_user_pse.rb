class AddUserIdToSimpleUserPse < ActiveRecord::Migration
  def change
    add_column :simple_user_pses, :user_id, :integer
  end
end
