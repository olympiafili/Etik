class AddSungateToSimpleUserPses < ActiveRecord::Migration
  def change
    add_column :simple_user_pses, :cust_no, :integer
    add_column :simple_user_pses, :mr, :text
    add_column :simple_user_pses, :city, :text
    add_column :simple_user_pses, :postal_code, :integer
    add_column :simple_user_pses, :country_code, :text
    add_column :simple_user_pses, :mobile, :text
    add_column :simple_user_pses, :fax, :text
    add_column :simple_user_pses, :VAT, :integer
  end
end
