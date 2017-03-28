class AddSungateCodeToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :sungate_code, :string
  end
end
