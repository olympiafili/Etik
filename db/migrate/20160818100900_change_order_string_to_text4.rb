class ChangeOrderStringToText4 < ActiveRecord::Migration
  def self.up
  	change_column :orders, :avatar, :text
  end

  def self.down
    change_column :orders, :avatar, :string
  end
end
