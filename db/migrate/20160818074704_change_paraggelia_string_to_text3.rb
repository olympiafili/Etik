class ChangeParaggeliaStringToText3 < ActiveRecord::Migration
  def self.up
  	change_column :paraggelia, :avatar, :text
  end

  def self.down
    change_column :paraggelia, :avatar, :string
  end
end
