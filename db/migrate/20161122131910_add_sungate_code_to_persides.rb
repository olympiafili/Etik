class AddSungateCodeToPersides < ActiveRecord::Migration
  def change
    add_column :persides, :sungate_code, :string
  end
end
