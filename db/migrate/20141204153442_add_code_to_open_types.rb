class AddCodeToOpenTypes < ActiveRecord::Migration
  def change
    add_column :open_types, :code, :float
  end
end
