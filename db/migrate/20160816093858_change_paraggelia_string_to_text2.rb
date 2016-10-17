class ChangeParaggeliaStringToText2 < ActiveRecord::Migration
  def self.up
  	change_column :paraggelia, :avatar, :string
  end

  def self.down
    change_column :paraggelia, :avatar, :text
  end
end
