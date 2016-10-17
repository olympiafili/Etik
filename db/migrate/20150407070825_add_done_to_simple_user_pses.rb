class AddDoneToSimpleUserPses < ActiveRecord::Migration
  def change
    add_column :simple_user_pses, :done, :float
  end
end
