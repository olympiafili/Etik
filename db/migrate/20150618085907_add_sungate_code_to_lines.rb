class AddSungateCodeToLines < ActiveRecord::Migration
  def change
    add_column :lines, :sungate_code, :text
  end
end
