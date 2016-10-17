class AddPosostoSunToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :pososto_sun, :integer
  end
end
