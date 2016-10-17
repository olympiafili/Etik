class AddSungateNumToSimpleUserPses < ActiveRecord::Migration
  def change
    add_column :simple_user_pses, :sungate_num, :text
  end
end
