class AddNameEpithetoKaiAllaToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :text
    add_column :users, :epitheto, :text
    add_column :users, :company, :text
    add_column :users, :phone, :integer
    add_column :users, :region, :text
  end
end
