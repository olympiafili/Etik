class AddDealerNumToSimpleUserPses < ActiveRecord::Migration
  def change
    add_column :simple_user_pses, :dealer_num, :text
  end
end
