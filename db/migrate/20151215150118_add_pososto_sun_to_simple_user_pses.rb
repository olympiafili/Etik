class AddPosostoSunToSimpleUserPses < ActiveRecord::Migration
  def change
    add_column :simple_user_pses, :pososto_sun, :integer
  end
end
