class AddSungateCodeToOpenTypes < ActiveRecord::Migration
  def change
    add_column :open_types, :sungate_code, :string
  end
end
