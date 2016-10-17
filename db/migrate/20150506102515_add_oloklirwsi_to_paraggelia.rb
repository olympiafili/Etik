class AddOloklirwsiToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :done, :int
  end
end
