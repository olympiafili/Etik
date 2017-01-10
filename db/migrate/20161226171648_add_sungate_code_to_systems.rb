class AddSungateCodeToSystems < ActiveRecord::Migration
  def change
    add_column :systems, :sungate_code, :string
  end
end
