class AddSungateCodeToTzamia < ActiveRecord::Migration
  def change
    add_column :tzamia, :sungate_code, :string
  end
end
