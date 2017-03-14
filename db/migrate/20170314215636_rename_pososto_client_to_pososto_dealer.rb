class RenamePosostoClientToPosostoDealer < ActiveRecord::Migration
  def change
  	rename_column :users, :pososto_client, :pososto_dealer
  end
end
