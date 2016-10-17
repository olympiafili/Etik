class AddPosostoToSimpleUserPses < ActiveRecord::Migration
  def change
    add_column :simple_user_pses, :pososto, :integer
  end
end
